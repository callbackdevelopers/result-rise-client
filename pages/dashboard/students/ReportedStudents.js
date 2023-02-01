
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ShowReportModal from "../../../components/modals/StudentReportModal/ShowReportModal";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Spiner from "../../../components/Spiner/Spiner";

function ReportedStudents() {
    const [report, setReport] = useState(null)


    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/reports")
            const data = await res.json()

            return data;
        }
    })
    if (isLoading) {
        return <Spiner className=""></Spiner>
    }

    const handleReport = (report) => {

        setReport(report);

    };



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
                                    <th>Report</th>
                                    <th>department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reports?.map(report => <tr>
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
                                            <span className="">{report.report.slice(0, 30)} <label onClick={() => handleReport(report)} htmlFor="show-report-modal" className="btn btn-active btn-xs btn-primary">Show more</label></span>

                                        </td>
                                        <td>{report.department}</td>
                                        <th>

                                            <label htmlFor="show-report-modal" className="btn btn-warning btn-xs">Resolve</label>

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
                {report && (
                    <ShowReportModal report={report}></ShowReportModal>
                )}
                <Sidebars></Sidebars>
                <ShowReportModal></ShowReportModal>




            </div>
        </>
    );
}

export default ReportedStudents;