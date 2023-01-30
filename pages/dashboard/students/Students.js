
import { useQuery } from "@tanstack/react-query";
import StudentReportModal from "../../../components/modals/StudentReportModal/StudentReportModal";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Spiner from "../../../components/Spiner/Spiner";

function allStudents() {
    // const [reportStudent, setReportStudent] = useState(null)


    const url = `http://localhost:3100/users?roll=student`
    const { data: students = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            return data;
        }
    })
    if (isLoading) {
        return <Spiner></Spiner>
    }

    const handleReportStudent = (student) => {
        console.log(student)


    }



    return (
        <>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>department</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    students?.map(student => <tr>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={student.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{student.name}</div>
                                                    <div className="text-sm opacity-50"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <br />
                                            <span className="badge badge-ghost badge-sm">{student.address}</span>
                                        </td>
                                        <td>{student.department}</td>
                                        <th>

                                            <label onClick={() => handleReportStudent(student)} htmlFor="student-report-modal" className="btn btn-warning btn-xs">Report</label>
                                            {/* onClick={() => handleStudentDelete(students)} */}
                                            {/* onClick={() => setReportStudent(student)}  */}
                                        </th>
                                    </tr>)
                                }


                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <Sidebars></Sidebars>
                <StudentReportModal></StudentReportModal>
            </div>
        </>
    );
}

export default allStudents;