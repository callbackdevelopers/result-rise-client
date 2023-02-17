import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import UsersTableTamplete from "../../../../components/Shared/UsersTableTamplete/usersTableTamplete"
import MidSpinner from "../../../../components/Spiner/MidSpinner"
import AlertMessage from "../../../../Hooks/AlertMessage"
import Layout from "../../../../Layout/Layout"


const index = () => {
    const { successMessage } = AlertMessage();
    const [users, setUsers] = useState(null)
    const url = `https://resultrise-server.vercel.app/pending/student`
    const { data = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            setUsers(data);
            return data;
        }
    })
    const handleUser = (user) => {
        fetch(`https://resultrise-server.vercel.app/users/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successMessage("Approved")
                    refetch()
                }
            })
    }
    if (isLoading) return <MidSpinner />
    refetch()
    return (
        <Layout>
            {users?.length < 1 ?
                <div className="flex h-[80vh] justify-center items-center text-3xl">
                    Currently <br /> No Pending Student</div> :
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Depertment</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            users?.map(user => <UsersTableTamplete
                                id={user._id}
                                key={user._id}
                                user={user}
                                handleUser={handleUser}
                                btnName={"Approve"}
                            ></UsersTableTamplete>)
                        }
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
            }
        </Layout>
    );
}
export default index;