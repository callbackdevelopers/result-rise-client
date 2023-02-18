import { useQuery } from "@tanstack/react-query"
import Search from "../../../../components/Search/Search"
import TableTemplate from "../../../../components/Shared/TableTemplate/TableTemplate"
import MidSpinner from "../../../../components/Spiner/MidSpinner"
import AlertMessage from "../../../../Hooks/AlertMessage"
import Layout from "../../../../Layout/Layout"

const index = () => {
    const { successMessage } = AlertMessage();
    const url = `http://localhost:3100/pending/teacher`
    const { data: PendingTeacher = [], refetch, isLoading } = useQuery({
        queryKey: ["PendingTeacher"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })
    const handleUser = (id) => {
        fetch(`http://localhost:3100/users/${id}`, {
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
    const tableData = { first: 'Name', second: 'Email', third: 'Department', fourth: 'Action' }
    if (isLoading) return <MidSpinner />
    return (
        <Layout>
            <div className='bg-gray-200 min-h-screen'>
                <div className='p-4'>
                    <Search
                        title={"Find Pending Teacher"}
                        value={"Reported Student"}
                    ></Search>
                </div>
                <TableTemplate
                    tableData={tableData}
                    users={PendingTeacher}
                    handleUser={handleUser}
                    btnName={'Approve'}
                    type={true}
                    action={"approve"}
                />
            </div>
        </Layout>
    );
}

export default index;