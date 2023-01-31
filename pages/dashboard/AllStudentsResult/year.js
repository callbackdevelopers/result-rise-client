import FirstYearTable from "../../../components/Table/FirstYearTable";
import FourthYearTable from "../../../components/Table/FourthYearTable";
import SecondYearTable from "../../../components/Table/SecondYearTable";
import ThirdYearTable from "../../../components/Table/ThirdYearTable";


const Year = ({ finaldata, Addmission, department }) => {
  const { first_year, second_year, third_year, fourth_year } = finaldata;
  console.log(finaldata);

  return (
    <div>
      {first_year?.map((firstYearData) => (
        <FirstYearTable firstYearData={firstYearData} department={department} Addmission={Addmission} />
      ))}
      {second_year?.map((secondYearData) => (
        <SecondYearTable secondYearData={secondYearData} department={department} Addmission={Addmission} />
      ))}
      {third_year?.map((thirdYearData) => (
        <ThirdYearTable thirdYearData={thirdYearData} department={department} Addmission={Addmission} />
      ))}
      {fourth_year?.map((fourthYearTable) => (
        <FourthYearTable fourthYearTable={fourthYearTable} department={department} Addmission={Addmission} />
      ))}

    </div>
  );
};

export default Year;
