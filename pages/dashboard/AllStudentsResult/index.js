
import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import ButtonUp from "../../../components/Shared/Buttons/SecondaryButton";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Year from "./year";



function Semester() {

 const {data: semesterResultData = []} = useQuery({
  queryKey: [],
  queryFn:async () =>{
   const res = await fetch('http://localhost:3100/resultdata')
   const data = await res.json();
   return data;
  }
  
 })


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
                    <ButtonUp> semester name  {semester.year_name}</ButtonUp>

                    {semester.semester_results.map((finaldata) => (
                      <div key={finaldata._id}>
                        <Year finaldata={finaldata} key={finaldata._id} />
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
}

export default Semester;
