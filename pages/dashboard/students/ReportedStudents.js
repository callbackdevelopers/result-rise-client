
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ConfirmationModal from "../../../components/modals/ConfirmationModal/ConfirmationModal";
import ShowReportModal from "../../../components/modals/StudentReportModal/ShowReportModal";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Spiner from "../../../components/Spiner/Spiner";
import AlertMessage from "../../../Hooks/AlertMessage";

function ReportedStudents() {
    const { successMessage, errorMessage } = AlertMessage();
    const [report, setReport] = useState(null);
    const [resolve, setResolve] = useState(null);
    const closeModal = () => {
        setResolve(null)
    }


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

    const handleResolved = (resolve) => {
        fetch(`http://localhost:3100/resolved/${resolve._id}`, {
            method: "PUT"

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    refetch()
                    successMessage("Resolved Now!");


                }
                else {
                    errorMessage("Something went wrong, Please try again")
                }
            })
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
                                            <span>
                                                {report?.report.length > 30 ?
                                                    <>{report?.report.slice(0, 25) + "..."} <label onClick={() => handleReport(report)} htmlFor="show-report-modal" className="font-semibold cursor-pointer">Click to show more</label></>
                                                    :
                                                    <span>{report?.report}</span>
                                                }
                                            </span>


                                        </td>
                                        <td>{report.department}</td>
                                        <th>

                                            {
                                                report?.resolved ? <label disabled onClick={() => setResolve(report)} htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Success</label>
                                                    :
                                                    <label onClick={() => setResolve(report)} htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Resolve</label>
                                            }


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
                {resolve && <ConfirmationModal
                    title={`Do you really want to ${resolve?.name} resolved?`}
                    message={`If you once resolved then this button will be disabled for you!!`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleResolved}
                    modalData={resolve}
                ></ConfirmationModal>
                }



            </div>
        </>
    );
}

export default ReportedStudents;