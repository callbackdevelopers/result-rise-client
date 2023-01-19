import DashboardNavbar from "../components/Navbars/DashboardNavbar";
import Sidebar from "../components/Sidebars/Sidebar";

const Layout = ({ children }) => {
    return (
        <div>
<<<<<<< HEAD
            <div className='h-screen flex flex-row justify-start'>
                <Sidebar className="fixed" />
                <div className=' flex-1 p-4  '>
=======
            <div className="h-screen flex flex-row justify-start">
                <Sidebar />
                <div className=" flex-1 p-4  ">
                    <DashboardNavbar />
>>>>>>> d27a5882958d90954202e0de5a439b63cc453813
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
