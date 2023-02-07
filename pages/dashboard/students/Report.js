import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import StudentReportModal from "../../../components/modals/StudentReportModal/StudentReportModal";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";

function Report() {

    const [reportStudent, setReportStudent] = useState(null);
    const { data: students = [], refetch, isLoading } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/verified/student")
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) return <MidSpinner />
    return (
        <Layout>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {students?.map(student => <tr>
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

                                <label onClick={() => setReportStudent(student)} htmlFor="student-report-modal" className="btn btn-warning btn-xs">Report</label>

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
            {reportStudent && (
                <StudentReportModal data={reportStudent}></StudentReportModal>
            )}
            <StudentReportModal></StudentReportModal>

        </Layout>
    );
}

export default Report;