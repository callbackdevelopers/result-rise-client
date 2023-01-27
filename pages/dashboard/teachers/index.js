import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";
import Spiner from "../../../components/Spiner/Spiner";
import Teacher from "./teacher";

function teachers() {
    const url = `http://localhost:3100/users`
    const { data: teachers = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data1 = await res.json()
            const data = data1.filter(u => u.roll === "teacher")
            return data;
        }
    })
    console.log("Stu", teachers)

    if (isLoading) {
        return <Spiner></Spiner>
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
                                    <th>department</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                teachers?.map(teacher => <Teacher
                                    id={teacher._id}
                                    teacher={teacher}
                                ></Teacher>)
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
export default teachers;