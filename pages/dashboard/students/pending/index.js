import { useQuery } from "@tanstack/react-query"
import Search from "../../../../components/Search/Search"
import TableTemplate from "../../../../components/Shared/TableTemplate/TableTemplate"
import MidSpinner from "../../../../components/Spiner/MidSpinner"
import AlertMessage from "../../../../Hooks/AlertMessage"
import Layout from "../../../../Layout/Layout"


const index = () => {
    const { successMessage } = AlertMessage();
    const url = `https://resultrise-server.vercel.app/pending/student`
    const { data: pendingStudent = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })
    const handleUser = (id) => {
        fetch(`https://resultrise-server.vercel.app/users/${id}`, {
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
                        title={"Find Pending Student"}
                        value={"Reported Student"}
                    ></Search>
                </div>
                <TableTemplate
                    tableData={tableData}
                    users={pendingStudent}
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