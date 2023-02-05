import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../../components/modals/ConfirmationModal/ConfirmationModal';
import DashboardNavbar from '../../../components/Navbars/DashboardNavbar';
import Sidebars from '../../../components/Sidebars/Sidebars';
import AlertMessage from '../../../Hooks/AlertMessage';

const index = () => {
    const { successMessage, errorMessage } = AlertMessage()
    const [deleteTeacher, setDeleteTeacher] = useState(null)

    const closeModal = () => {
        setDeleteTeacher(null)
    }
    const { data: teachers = [], refetch } = useQuery({
        queryKey: ["teachers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/user?roll=teacher")
            const data = await res.json()
            return data;
        }
    })

    const handleTeacherDelete = (teacher) => {
        console.log(teacher);
        fetch(`http://localhost:3100/user/${teacher._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    successMessage("Successfully Deleted");
                    refetch();
                }
                else {
                    errorMessage("Something went wrong!! please try again")
                }
            });

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
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    teachers?.map(teacher => <tr>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={teacher?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{teacher?.name}</div>
                                                    <div className="text-sm opacity-50"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <br />
                                            <span className="">{teacher?.email}</span>
                                        </td>
                                        <td>

                                            <br />
                                            <span className="">{teacher?.department}</span>
                                        </td>
                                        <td></td>
                                        <th>

                                            <label onClick={() => setDeleteTeacher(teacher)} htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Delete</label>

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
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {deleteTeacher && <ConfirmationModal
                    title={`Are you sure you want to delete? `}
                    message={`If you delete teacher, will be permanently deleted! ${deleteTeacher?.name}`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    successAction={handleTeacherDelete}
                    modalData={deleteTeacher}
                ></ConfirmationModal>
                }
                <Sidebars></Sidebars>
            </div>
        </>

    );
};

export default index;