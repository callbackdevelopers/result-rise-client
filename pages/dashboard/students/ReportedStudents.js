
import { useQuery } from "@tanstack/react-query";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";


function ReportedStudents() {
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/reports/resolved")
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) return <MidSpinner />

    return (
        <>
            <Layout>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Report</th>
                                <th>department</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports?.map(report => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={report.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{report.name}</div>
                                            <div className="text-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <br />
                                    <span>
                                        {report?.report.length > 30 ?
                                            <>{report?.report.slice(0, 25) + ""} <label htmlFor="show-report-modal" className="font-semibold cursor-pointer">...</label></>
                                            : <span>{report?.report}</span>
                                        }
                                    </span>
                                </td>
                                <td>{report.department}</td>
                                <th>
                                    <label disabled htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Success</label>
                                </th>
                            </tr>)}
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
            </Layout>
        </>
    );
}

export default ReportedStudents;