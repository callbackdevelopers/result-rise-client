import { useQuery } from "@tanstack/react-query";
import Search from "../../../../components/Search/Search";
import TableTemplate from "../../../../components/Shared/TableTemplate/TableTemplate";
import MidSpinner from "../../../../components/Spiner/MidSpinner";
import Layout from "../../../../Layout/Layout";

function reporterdStudent() {
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/reports/pending")
            const data = await res.json()
            return data;
        }
    })
    const tableData = { first: 'Name', second: 'Email', third: 'Report Info', fourth: 'Action' }
    if (isLoading) return <MidSpinner />
    return (
        <>
            <Layout>
                <div className='bg-gray-200 min-h-screen'>
                    <div className='p-4'>
                        <Search
                            title={"Find Pending Report Student"}
                            value={"Reported Student"}
                        ></Search>
                    </div>
                    <TableTemplate
                        tableData={tableData}
                        users={reports}
                        btnName={'success'}
                        type={false}
                        action={"pending"}
                        refetch={refetch}
                    />
                </div>
            </Layout>
        </>
    );
}

export default reporterdStudent;