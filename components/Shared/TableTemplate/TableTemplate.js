import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import InfoModal from "../../modals/Info/InfoModal";

function TableTemplate({ users, handleUser, btnName, tableData, type, action }) {
    const [reportStudent, setReportStudent] = useState(null);

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='px-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>{tableData.first}</span>
                        <span className='hidden md:grid'>{tableData.second}</span>
                        <span className='hidden md:grid'>{tableData.third}</span>
                        <span className='sm:text-left text-left'>{tableData.fourth}</span>
                    </div>
                    <ul>
                        {users.map((user, id) => (
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
                                        {user?.report.length > 30 ?
                                            <>{user?.report.slice(0, 20) + ""}
                                                <label
                                                    onClick={() => setReportStudent(user)}
                                                    htmlFor="infomodal" className="font-semibold cursor-pointer">...</label>
                                            </>
                                            :
                                            <span>{user?.report}</span>
                                        }
                                    </span>
                                }
                                <div className='flex  items-center justify-between'>
                                    {action === "delete" && <label onClick={() => handleUser(user._id)} htmlFor="confirmation-modal" className="btn btn-warning  btn-xs text-gray-600  w-20 sm:text-left text-right">{btnName}</label>}
                                    {action === "success" &&
                                        <label htmlFor="confirmation-modal" className="btn btn-disabled  btn-xs text-gray-600  w-20 sm:text-left text-right">{btnName}</label>}

                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                reportStudent &&
                <InfoModal
                    report={reportStudent}
                />
            }
        </div>

    );
}

export default TableTemplate;