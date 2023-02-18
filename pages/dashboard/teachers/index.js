import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Search from '../../../components/Search/Search';
import TableTemplate from '../../../components/Shared/TableTemplate/TableTemplate';
import MidSpinner from '../../../components/Spiner/MidSpinner';
import AlertMessage from '../../../Hooks/AlertMessage';
import Layout from '../../../Layout/Layout';

const index = () => {
    const { successMessage, errorMessage } = AlertMessage()
    const [deleteTeacher, setDeleteTeacher] = useState(null)

    const closeModal = () => {
        setDeleteTeacher(null)
    }
    const { data: teachers = [], refetch, isLoading } = useQuery({
        queryKey: ["teachers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/verified/teacher")
            const data = await res.json()
            return data;
        }
    })
    const handleUser = (id) => {
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
                fetch(`http://localhost:3100/user/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
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

    const tableData = { first: 'Name', second: 'Email', third: 'subject', fourth: 'Action' }
    if (isLoading) return <MidSpinner />
    return (
        <>
            <Layout>
                <div className='bg-gray-100 min-h-screen'>
                    <div className='p-4'>
                        <Search
                            title={'Teachers List'}
                            value={'Search by name'}
                        />
                    </div>
                    <TableTemplate
                        tableData={tableData}
                        users={teachers}
                        handleUser={handleUser}
                        btnName={'Delete'}
                        type={true}
                        action={"delete"}
                    />
                </div>
            </Layout>
        </>

    );
};

export default index;