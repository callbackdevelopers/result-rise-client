import SemesterBtn from "../../../components/Table/semesterBtn";



function index({semesterResultData}) {

    return (
        <div className=" ">
        <div className=" py-2">
          <h2 className="lg:text-2xl text-center text-white">Semester Result </h2>
        
        </div>
        <div className=" gap-3 p-4">
          <div>
            {semesterResultData.map((semester) => (
              <div className="border ">
                <SemesterBtn data={semester} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default index;


export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3100/resultdata");
    const data = await res.json();
  
    return {
      props: {
        semesterResultData: data,
      },
    };
  };
  