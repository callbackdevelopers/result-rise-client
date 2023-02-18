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
        <>
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
                        users={reports}
                        btnName={'success'}
                        type={false}
                        action={"success"}
                    />

                </div>

                {/* <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Report</th>
                                <th>department</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchData?.map(report =>
                                <tr key={report.id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={report.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{report.name}</div>
                                                <div className="text-sm opacity-50"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <br />
                                        <span>
                                            {report?.report.length > 30 ?
                                                <>{report?.report.slice(0, 25) + ""} <label htmlFor="show-report-modal" className="font-semibold cursor-pointer">...</label></>
                                                : <span>{report?.report}</span>
                                            }
                                        </span>
                                    </td>
                                    <td>{report.department}</td>
                                    <th>
                                        <label disabled htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Success</label>
                                    </th>
                                </tr>)}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div> */}
            </Layout>
        </>
    );
}

export default ReportedStudents;