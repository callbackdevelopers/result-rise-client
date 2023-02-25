import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaFileAlt, FaGraduationCap, FaUser, FaUserEdit } from "react-icons/fa";
import ProfileModal from "../../../components/modals/ProfileModal/ProfileModal";
import MidSpinner from '../../../components/Spiner/MidSpinner';
import { useFirebase } from '../../../context/UserContext';
import Layout from '../../../Layout/Layout';


const profile = () => {
    const { user, } = useFirebase()
    const [userEdit, setUserEdit] = useState(true);

    const { data: userData = [], refetch, isLoading } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3100/users/${user?.email}`)
            const data = await res.json()
            return data[0];
        }
    })
    // console.log(userData)
    const { photoURL, roll, name, email, address, phone, gender, department, verification, id } = userData;

    if (isLoading) return <MidSpinner />
    return (
        <Layout>
            <div className=''>
                <div className="container mx-auto my-5 p-5">
                    <div className="w-full mx-2 h-64">
                        <div className="flex justify-between">
                            <div className="bg-white p-3 text-center lg:flex justify-items-center">
                                <div className="image overflow-hidden p-3 lg:border-l-4 text-center border-green-400">
                                    <div className="avatar">
                                        <div className="w-32 rounded-xl">
                                            <img src={photoURL} />
                                        </div>
                                    </div>
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{name}</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6">{roll}</h3>
                                </div>
                                <div className="ml-lg-5">
                                    <ul
                                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                        <li className="flex items-center py-3">
                                            <span>{roll} ID:</span>
                                            <span className="ml-auto"><span
                                                className="bg-green-500 py-1 px-2 rounded text-white text-sm">{id}</span></span>
                                        </li>
                                        <li className="flex items-center py-3">
                                            <span>Status :</span>
                                            <span className="ml-auto">{verification === true ? "verified" : "Pending"}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-3">
                                {verification &&
                                    <label htmlFor="my-modal-2" >
                                        <FaUserEdit />
                                    </label>}
                            </div>

                        </div>
                        {/* end img-section */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span className="text-green-500">
                                    <FaUser />
                                </span>
                                <span className="tracking-wide">About</span>
                                {/* The button to open modal */}

                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Name</div>
                                        <div className="px-4 py-2">{name}</div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Gender</div>
                                        <div className="px-4 py-2">{gender}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 py-2">{phone}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Address</div>
                                        <div className="px-4 py-2">{address}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email.</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href={`mailto:${email}`}>{email}</a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Birthday</div>
                                        <div className="px-4 py-2">Feb 06, 1998</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div className="my-4"></div>

                        {/* <!-- Experience and education --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">

                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <FaFileAlt className='text-green-500' />
                                        <span className="tracking-wide">Department</span>
                                    </div>
                                    <ul className="list-inside space-y-2">
                                        <li>
                                            <div className="text-teal-600">{department}</div>
                                            <div className="text-gray-500 text-xs">
                                                March 2020 - Now
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <FaGraduationCap className='text-green-500' />
                                        <span className="tracking-wide">Education</span>
                                    </div>
                                    <ul className="list-inside space-y-2">
                                        <li>
                                            <div className="text-teal-600">Masters Degree in DU</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End of Experience and education grid --> */}
                        </div>
                        {/* <!-- End of profile tab --> */}
                    </div>
                    {
                        userEdit &&
                        <ProfileModal
                            userData={userData}
                            refetch={refetch}
                            setUserEdit={setUserEdit}
                        ></ProfileModal>
                    }
                </div>
            </div>

        </Layout>
    );
};

export default profile;