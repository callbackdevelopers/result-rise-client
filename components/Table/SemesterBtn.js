
import Year from "../../pages/dashboard/AllStudentsResult/year";
import ButtonUp from "../Shared/Buttons/SecondaryButton";

const SemesterBtn = ({ data }) => {
  const { semester_results, Addmission, department } = data;
 console.log(data);
  return (
    <div>
      {semester_results.map((semester, index) => (
        <div key={semester._id}>
          <ButtonUp> {semester.year_name}</ButtonUp>

          <Year data={semester} key={index} Addmission={Addmission} department={department}></Year>
        </div>
      ))}
    </div>
  );
};

export default SemesterBtn;
