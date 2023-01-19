import DashboardNavbar from "../components/Navbars/DashboardNavbar";
import StudentSidebar from "../components/Sidebars/StudentSidebar";

const StudentLayout = ({ children }) => {
    return (
        <div>
            <div className="h-screen flex flex-row justify-start">
                <StudentSidebar />
                <div className=" flex-1 p-4  ">
                    <DashboardNavbar />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default StudentLayout;
