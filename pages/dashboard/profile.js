import { FaFileAlt, FaGraduationCap, FaUser, FaUsers } from "react-icons/fa";

const profile = () => {
    return (
        <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
                {/* <!-- Left Side --> */}
                <div className="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Profile Card --> */}
                    <div className="bg-white p-3 border-t-4 text-center border-green-400">
                        <div className="image overflow-hidden ">
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jahirul Islam</h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">Student</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                        <ul
                            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Student ID:</span>
                                <span className="ml-auto"><span
                                    className="bg-green-500 py-1 px-2 rounded text-white text-sm">1222</span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Student since</span>
                                <span className="ml-auto">Nov 07, 2016</span>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End of profile card --> */}
                    <div className="my-4"></div>
                    {/* <!-- Friends card --> */}
                    <div className="bg-white p-3 hover:shadow">
                        <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span className="text-green-500">
                                <FaUsers />
                            </span>
                            <span>Others Student</span>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-center my-2">
                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <a href="#" className="text-main-color">Student Name</a>
                            </div>

                        </div>
                    </div>
                    {/* <!-- End of friends card --> */}
                </div>
                {/* Right Side */}

                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* <!-- Profile tab --> */}
                    {/* <!-- About Section --> */}

                    {/* start profile-img  */}
                    <div className="bg-white p-3 text-center">
                        <div className="image overflow-hidden ">
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jahirul Islam</h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">Student</h3>

                    </div>

                    {/* end img-section */}


                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <FaUser />
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">Jahirul</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">Islam</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                    <div className="px-4 py-2">Male</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                    <div className="px-4 py-2">+880 123456789</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                    <div className="px-4 py-2">Dhaka, Bangladesh</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                    <div className="px-4 py-2">Dhaka, Bangladesh</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href="mailto:jane@example.com">jahirul@example.com</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                    <div className="px-4 py-2">Feb 06, 1998</div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                            Full Information</button>
                    </div>
                    {/* <!-- End of about section --> */}

                    <div className="my-4"></div>

                    {/* <!-- Experience and education --> */}
                    <div className="bg-white p-3 shadow-sm rounded-sm">

                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <FaFileAlt className='text-green-500' />
                                    <span className="tracking-wide">Course</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">BSC.........</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
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
            </div>
        </div>
    );
};

export default profile;