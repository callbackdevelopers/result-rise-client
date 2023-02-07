import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ConfirmationModal from "../../../../components/modals/ConfirmationModal/ConfirmationModal";
import ShowReportModal from "../../../../components/modals/StudentReportModal/ShowReportModal";
import MidSpinner from "../../../../components/Spiner/MidSpinner";
import AlertMessage from "../../../../Hooks/AlertMessage";
import Layout from "../../../../Layout/Layout";

function reporterdStudent() {
    const { successMessage, errorMessage } = AlertMessage();
    const [report, setReport] = useState(null);
    const [resolve, setResolve] = useState(null);
    const closeModal = () => {
        setResolve(null)
    }
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/reports/pending")
            const data = await res.json()
            return data;
        }
    })
    const handleResolved = (resolve) => {
        fetch(`http://localhost:3100/resolved/${resolve._id}`, {
            method: "PUT"
        }).then(res => res.json())
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
                                            <>{report?.report.slice(0, 25) + ""} <label onClick={() => setReport(report)} htmlFor="show-report-modal" className="font-semibold cursor-pointer">...</label></>
                                            : <span>{report?.report}</span>
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
            {report && (
                <ShowReportModal report={report}></ShowReportModal>
            )}
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

        </>
    );
}

export default reporterdStudent;