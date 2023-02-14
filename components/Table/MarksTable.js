import MarksTableRow from "./MarksTableRow";


const MarksTable = ({ semesterResult }) => {
  const {
    semester,
    season,
    exam_results,
    department,
    Addmission,
  } = semesterResult;

  return (
    <div>
      {/* Exam marks  */}
      <div>
        <div className="  m-5 p-5">
          <div className="">
            <p className=" p-2  text-white bg-primary rounded-xl">
              {semester} Exam Marks{" "}
            </p>
          </div>
          <div className="lg:flex lg:justify-between items-end">
            <div>
              <p className=" ">Matric No: T19248</p>
              <p className="">Registration NO: 092836293223</p>
              <p className="font-bold">Semester: {season}</p>
            </div>
            <div className="">
              <p className=" mt-2">Department: {department}</p>
              <p className="">Admission: {Addmission}</p>
              <p className="">programme: Bachelor Program</p>
              <p className="font-bold">Semester Enrolled: {semester} </p>
            </div>
          </div>

          <div className="overflow-x-auto border">
            <table className=" table w-full ">
              <thead className="text-blue-500">
                <tr>
                  <th>SL</th>
                  <th>Subject code </th>
                  <th>Subject Name </th>
                  <th>presentation marks</th>
                  <th>Midterm Marks </th>
                  <th>Final marks </th>
                  <th>Viva Marks</th>
                  <th>comment</th>
                </tr>
              </thead>
              <tbody>
                {exam_results?.map((numberdata, index) => (
                  <MarksTableRow data={numberdata} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarksTable;
