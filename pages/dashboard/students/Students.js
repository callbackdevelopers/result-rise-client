import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import UsersTableTamplete from "../../../components/Shared/UsersTableTamplete/usersTableTamplete";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Spiner from "../../../components/Spiner/Spiner";


const Students = () => {
    const btnName = "Delete";
    const url = `http://localhost:3100/users`
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data1 = await res.json()
            const data = data1.filter(u => u.roll === "student")
            return data;
        }
    })
    console.log("Stu", users)

    if (isLoading) {
        return <Spiner></Spiner>
    }

    const handleUser = (user) => {
        console.log('Deleting  with id: ', user)
        fetch(`http://localhost:3100/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
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
                                    <th>Address</th>
                                    <th>Depertment</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                users?.map(user => <UsersTableTamplete
                                    id={user._id}
                                    user={user}
                                    handleUser={handleUser}
                                    btnName={btnName}
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
                </div>
                <Sidebars></Sidebars>
            </div>
        </>
    );
}

export default Students;



