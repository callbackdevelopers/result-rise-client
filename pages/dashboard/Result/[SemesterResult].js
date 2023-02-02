import MarksTable from "./MarksTable";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar"
import Sidebars from "../../../components/Sidebars/Sidebars"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFirebase } from "../../../context/UserContext";

const SemesterResult = () => {
  const{user} = useFirebase();
   const [semesterResult, setSemesterResult] = useState({})
  const route = useRouter().query;
  
  const id = route.SemesterResult
  console.log(id);

  useEffect(()=>{
     fetch(`http://localhost:3100/resultdata/${id}?email=${user?.email}`)
     .then(res=>res.json())
     .then(data=>{
      console.log('semester result ',data);
      setSemesterResult(data)
     })

  },[id, user?.email])

  return (
    <>
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="">
            <div className=" py-2"></div>
            <div className=" gap-3 p-4">
              <MarksTable semesterResult={semesterResult} ></MarksTable>
            
            </div>
          </div>
        </div>
        <Sidebars />
      </div>
    </>
  );
};

export default SemesterResult;

