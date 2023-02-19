import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReactPaginate from 'react-paginate';
import ConfirmationModal from "../../modals/ConfirmationModal/ConfirmationModal";
import InfoModal from "../../modals/Info/InfoModal";
import StudentReportModal from "../../modals/StudentReportModal/StudentReportModal";

function TableTemplate({ users, handleUser, btnName, tableData, type, action, refetch }) {
    const [reportStudent, setReportStudent] = useState(null);
    const [resolve, setResolve] = useState(null);

    // Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 7;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(users.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % users.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='min-h-[80vh] overflow-y-hidden'>
            <div className='px-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>{tableData.first}</span>
                        <span className='hidden md:grid'>{tableData.second}</span>
                        <span className='hidden md:grid'>{tableData.third}</span>
                        <span className='sm:text-left text-left'>{tableData.fourth}</span>
                    </div>
                    <ul>
                        {currentItems.map((user, id) => (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className="flex items-center space-x-2">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-8 h-8">
                                            <img src={user?.photoURL} alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.name}
                                        </div>
                                        <div className="text-sm opacity-50">{user?.roll} {" "} ID: {user?.id}</div>
                                    </div>
                                </div>
                                <p className='hidden md:flex'>{user?.email}</p>
                                {type ? <p className='hidden md:flex'>{user?.department}</p> :
                                    <span className='hidden md:flex'>
                                        {user?.report?.length > 30 ?
                                            <>
                                                {user?.report.slice(0, 20) + ""}
                                                <label
                                                    onClick={() => setReportStudent(user)}
                                                    htmlFor="infomodal" className="font-semibold cursor-pointer">...</label>
                                            </>
                                            :
                                            <>
                                                <span>{user?.report}
                                                </span>
                                                <label
                                                    onClick={() => setReportStudent(user)}
                                                    htmlFor="infomodal" className="font-semibold cursor-pointer">...</label>
                                            </>
                                        }
                                    </span>
                                }
                                <div className='flex  items-center justify-between'>
                                    {action === "delete" && <label onClick={() => handleUser(user._id)} htmlFor="confirmation-modal" className="btn btn-warning  btn-xs text-gray-600  w-20 sm:text-left text-right">{btnName}</label>}
                                    {action === "success" &&
                                        <label htmlFor="confirmation-modal" className="btn btn-disabled  btn-xs text-gray-600  w-20 sm:text-left text-right">{btnName}</label>}
                                    {action === "report" &&
                                        <label onClick={() => setReportStudent(user)} htmlFor="student-report-modal" className="btn btn-warning btn-xs">Report</label>}
                                    {action === "pending" &&
                                        <label onClick={() => setResolve(user)} htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Resolve</label>
                                    }
                                    {action === "approve" && <label onClick={() => handleUser(user._id)} htmlFor="confirmation-modal" className="btn btn-warning  btn-xs text-gray-600  w-20 sm:text-left text-right">{btnName}</label>}
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ReactPaginate
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        nextLabel="next >"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        activeClassName="active"
                        nextLinkClassName="page-link"
                    />
                </div>
            </div>
            {reportStudent && <InfoModal report={reportStudent} />}
            {reportStudent && <StudentReportModal data={reportStudent} setReportStudent={setReportStudent} />}
            {resolve && <ConfirmationModal modalData={resolve} refetch={refetch} />}
        </div>

    );
}

export default TableTemplate;