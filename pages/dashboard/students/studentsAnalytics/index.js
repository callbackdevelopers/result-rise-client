import ResultChart from "../../../../components/chart/pieChart";
import DashboardNavbar from "../../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../../components/Sidebars/Sidebars";




const index = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="">
            <div className=" py-2">
              <h2 className="lg:text-2xl text-center"> Students Analytics</h2>
            </div>
            <div className=" gap-3 p-4">
           
              <ResultChart/>
            
            
            </div>
          </div>
        </div>
        <Sidebars />
      </div>
    </>
  );
};

export default index;
