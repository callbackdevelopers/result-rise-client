import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Search from "../../../components/Search/Search";
import TableTemplate from "../../../components/Shared/TableTemplate/TableTemplate";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";

function ReportedStudents() {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3100/reports/resolved")
            const data = await res.json()
            return data;
        }
    })
    useEffect(() => {
        if (search?.length > 0) {
            const filterResult = reports.filter(u => u?.name?.toLowerCase().includes(search?.toLowerCase()))
            setSearchData(filterResult)
        } else {
            setSearchData(reports)
        }
    }, [search, reports]);
    const tableData = { first: 'Name', second: 'Email', third: 'Report Info', fourth: 'Action' }
    if (isLoading) return <MidSpinner />
    return (
        <Layout>
            <div className='bg-gray-100 min-h-screen'>
                <div className='p-4'>
                    <Search
                        setSearch={setSearch}
                        setSearchData={setSearchData}
                        title={"Find Reported Student"}
                        value={"Reported Student"}
                    ></Search>
                </div>
                <TableTemplate
                    tableData={tableData}
                    users={searchData}
                    btnName={'success'}
                    type={false}
                    action={"success"}
                />
            </div>
        </Layout>
    );
}

export default ReportedStudents;