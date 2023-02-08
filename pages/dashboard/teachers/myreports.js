import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import InfoModal from "../../../components/modals/Info/InfoModal";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import { useFirebase } from "../../../context/UserContext";
import AlertMessage from "../../../Hooks/AlertMessage";
import Layout from "../../../Layout/Layout";

function myreports() {
    const { user } = useFirebase();
    const { successMessage, deleteMessage } = AlertMessage();
    const [reportStudent, setReportStudent] = useState(null);
    const { data: myreports = [], refetch, isLoading } = useQuery({
        queryKey: ['myreports', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3100/myreports/${user.email}`)
            const data = await res.json()
            return data;
        }
    })
    const heandelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3100/reports/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                {
                                    title: 'Deleted!',
                                    text: 'Your Report has been deleted.',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 1500
                                }
                            )
                        }
                    });
            }
        })
    }
    if (isLoading || !user) return <MidSpinner />
    refetch();
    return (
        <Layout>
            {myreports?.length < 1 ?
                <div className="flex h-[80vh] justify-center items-center text-3xl">
                    Currently <br /> No Report Here</div> :
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Report Info</th>
                                <th>Depertment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myreports?.map((report, i) => <tr key={i}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={report.photoURL} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{report.name}</div>
                                            <div className="text-sm opacity-50">{report.roll} ID: {report.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>
                                        {report?.report.length > 30 ?
                                            <>{report?.report.slice(0, 25) + ""}
                                                <label
                                                    onClick={() => setReportStudent(report)}
                                                    htmlFor="infomodal" className="font-semibold cursor-pointer">...</label>
                                            </>
                                            :
                                            <span>{report?.report}</span>
                                        }
                                    </span>
                                </td>
                                <td>{report.department}</td>
                                <td>
                                    <label
                                        onClick={() => heandelDelete(report._id)}
                                        className="btn btn-warning btn-xs">Delete</label>
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
            {reportStudent &&
                <InfoModal
                    report={reportStudent}
                />
            }
        </Layout>
    );
}

export default myreports;