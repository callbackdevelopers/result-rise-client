
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
                {reports?.length < 1 ?
                    <div className="flex h-[80vh] justify-center items-center text-3xl">
                        Currently <br /> No Pending Teacher</div> :
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Report By</th>
                                    <th>Report to</th>
                                    <th>Report Info</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports?.map(report => <tr key={report.id}>
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
                                        <span>
                                            {report?.report.length > 30 ?
                                                <>{report?.report.slice(0, 25) + ""} <label htmlFor="show-report-modal" className="font-semibold cursor-pointer">...</label></>
                                                : <span>{report?.report}</span>
                                            }
                                        </span>
                                    </td>
                                    <td>{report.department}</td>
                                    <td>
                                        {report?.reportDate}
                                        <br />
                                        {report?.reportTime}
                                    </td>
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
                    </div>}
            </Layout>
        </>
    );
}

export default ReportedStudents;