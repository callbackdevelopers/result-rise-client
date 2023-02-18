import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Search from "../../../components/Search/Search";
import TableTemplate from "../../../components/Shared/TableTemplate/TableTemplate";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import AlertMessage from "../../../Hooks/AlertMessage";
import Layout from "../../../Layout/Layout";


const index = () => {
    const { successMessage } = AlertMessage();
    const url = `http://localhost:3100/verified/student`
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const res = await fetch(url)
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
                fetch(`http://localhost:3100/users/${id}`, {
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
    const tableData = { first: 'Name', second: 'Email', third: 'subject', fourth: 'Action' }
    if (isLoading) return <MidSpinner />
    return (
        <>
            <Layout>
                <div className='bg-gray-100 min-h-screen'>
                    <div className='p-4'>
                        <Search
                            title={'Students List'}
                            value={'Search by name'}
                        />
                    </div>
                    <TableTemplate
                        tableData={tableData}
                        users={users}
                        handleUser={handleUser}
                        btnName={'Delete'}
                        type={true}
                        action={"delete"}
                    />
                </div>
            </Layout>
        </>
    );
}
export default index;