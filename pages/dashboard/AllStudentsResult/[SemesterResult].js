import MarksTable from "./MarksTable";
import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Spiner from "/components/Spiner/Spiner";

const SemesterResult = () => {
  const { data: semesterResultData = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:3100/resultdata");
      const data = await res.json();
      return data;
    },
  });

  console.log("root data", semesterResultData);

  return (
    <>
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="">
            <div className=" py-2">
              <h2 className="lg:text-2xl text-center text-white">
                Semester Result{" "}
              </h2>
            </div>
            <div className=" gap-3 p-4">
              <div>
                {semesterResultData.map((semester) => (
                  <div key={semester._id}>
                    {semester.semester_results.map((finaldata) => (
                      <div key={finaldata._id}>
                        <MarksTable finaldata={finaldata} />
                      </div>
                    ))}

                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Sidebars />
      </div>
    </>
  );
};

export default SemesterResult;
