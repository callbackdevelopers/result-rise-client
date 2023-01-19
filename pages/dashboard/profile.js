import { FaFileAlt, FaGraduationCap, FaUser, FaUserEdit } from "react-icons/fa";
import ProfileModal from "../../components/modals/ProfileModal/ProfileModal";
import AlartMessage from "../../Hooks/AlartMessage";

const profile = () => {
    const { successMessage, errorMessage } = AlartMessage()


    const studentDetails = {
        firstName: "Jahirul", lastName: "Islam", type: "Student", email: "jahirul@example.com", currentCddress: "Dhaka, Bangladesh", permanantAddress: "Dhaka, Bangladesh"
    }
    const { firstName, lastName, type, email, currentCddress, permanantAddress } = studentDetails;


    return (
        <div className="container mx-auto my-5 p-5">
            <div className="w-full md:w-9/12 mx-2 h-64">

                {/* start profile-img  */}
                <div className="flex">
                    <div className="bg-white p-3 text-center lg:flex justify-items-center">
                        <div className="image overflow-hidden p-3 lg:border-l-4 text-center border-green-400">
                            <div className="avatar">
                                <div className="w-32 rounded-xl">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{firstName} {lastName}</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Student</h3>
                        </div>

                        <div className="ml-lg-5">
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
                    </div>
                    <div className="p-3">
                        <a href="#my-modal-2">
                            <FaUserEdit />
                        </a>
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
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">{firstName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">{lastName}</div>
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
                                <div className="px-4 py-2">{currentCddress}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                <div className="px-4 py-2">{permanantAddress}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">{email}</a>
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
            {/* modal */}
            {/* <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <section className="bg-white ">
                        <div className="flex justify-center min-h-screen">

                            <div className="flex w-full mx-auto ">
                                <div className="w-full">

                                    <div>
                                        <div className="mt-3 md:flex md:items-center md:-mx-2">
                                            <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                                                <FaUserGraduate
                                                    className="w-6 h-6"
                                                />


                                                <span className="mx-2">
                                                    Student
                                                </span>
                                            </button>

                                            <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2  focus:outline-none">
                                                <FaChalkboardTeacher className="w-6 h-6" stroke="currentColor" strokeWidth="2" />

                                                <span className="mx-2">
                                                    Teacher
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <form
                                        onSubmit={handleSave(onSubmit)}
                                        className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">First Name</span>
                                            </label>
                                            <input type="text" placeholder="Jahirul" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.firstName ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                {...register("firstName", { required: ' Name must required' })}
                                            />
                                            {errors.firstName && <span className="label-text text-red-400">{errors?.firstName.message}</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Islam" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.firstName ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                {...register("lastName", { required: ' Name must required' })}
                                            />
                                            {errors.firstName && <span className="label-text text-red-400">{errors?.firstName.message}</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Id Number</span>
                                            </label>
                                            <input type="text" placeholder="XXX-XXXXX" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.id ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                {...register("id", { required: 'id must required' })}
                                            />
                                            {errors.id && <span className="label-text text-red-400">{errors?.id.message}</span>}
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="jahirul@example.com" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.email ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                {...register("email", { required: 'Email must required' })}
                                            />
                                            {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone Number</span>
                                            </label>
                                            <input type="number" placeholder="+088 123456789" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.email ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                {...register("phone", { required: 'Email must required' })}
                                            />
                                            {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Current Address</span>
                                            </label>
                                            <input type="text" placeholder="Dhaka Bangladesh" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.currentAddress ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                {...register("currentAddress", { required: 'Current Address is required' })}
                                            />
                                            {errors.currentAddress && <span className="label-text text-red-400">{errors?.currentAddress.message}</span>}
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="modal-action">
                        <a href="#" className="btn">Save</a>
                    </div>
                </div>
            </div> */}
            <ProfileModal></ProfileModal>
        </div >
    );
};

export default profile;