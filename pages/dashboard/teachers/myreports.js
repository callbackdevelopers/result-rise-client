import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Swal from "sweetalert2";
import InfoModal from "../../../components/modals/Info/InfoModal";
import Search from "../../../components/Search/Search";
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
            <div className='bg-gray-100 min-h-screen'>
                <div className='p-4'>
                    <Search
                        title={'My Reports'}
                        value={'Search by name'}
                    />
                </div>
                <div className='px-4'>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>Name</span> <span className='hidden md:grid'>Depertment</span>

                            <span className='hidden md:grid'>Report Info</span>
                            <span className='sm:text-left text-left'>Action</span>
                        </div>
                        <ul>
                            {myreports.map((report, id) => (
                                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="flex items-center space-x-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src={report.photoURL} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{report.name}</div>
                                            <div className="text-sm opacity-50">{report.roll} ID: {report.id}</div>
                                        </div>
                                    </div>
                                    <p className='hidden md:flex'>{report.department}</p>
                                    <span className='hidden md:flex'>
                                        {report?.report.length > 30 ?
                                            <>{report?.report.slice(0, 20) + ""}
                                                <label
                                                    onClick={() => setReportStudent(report)}
                                                    htmlFor="infomodal" className="font-semibold cursor-pointer">...</label>
                                            </>
                                            :
                                            <span>{report?.report}</span>
                                        }
                                    </span>
                                    <div className='flex  items-center justify-between'>
                                        <label
                                            onClick={() => heandelDelete(report._id)}
                                            className="btn btn-warning  btn-xs text-gray-600  w-20 sm:text-left text-right">Delete</label>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {reportStudent &&
                <InfoModal
                    report={reportStudent}
                />
            }
        </Layout>
    );
}

export default myreports;