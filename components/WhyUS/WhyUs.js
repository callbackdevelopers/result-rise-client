import React from 'react';


const WhyUs = () => {
    return (
        <div>
            <div className="card  bg-base-100 rounded-none lg:grid lg:grid-cols-2 md:gap-4">
                <figure className="col-span-1"><img className="max-h-96" src="https://img.freepik.com/free-vector/business-planning-online-service-platform-setting-goal-target-following-schedule-idea-planning-organization-online-management-flat-vector-illustration_613284-2809.jpg?w=740&t=st=1676021685~exp=1676022285~hmac=6773ca6d067688b1c3dafb169e76ccc73326a3fa7d01d5a3735e3d57282c583c" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title md:text-4xl">Result Rise</h2>
                    <p className="font-semibold">Student Result Generating Platform</p>
                    <p>We provide fully customizable Student Result management with Web App for student parents, teachers, and school administration. The apps were designed by <span className="font-semibold">Callback Developers</span> to make it easier for everyone in a school or college to interact and share information. communication is made simpler and each user receives updates on their institute. Simple to use you may move more quickly, save money, and integrate on-premises apps and data anywhere at any time with a web-based Result Rise system.
                    </p>
                </div>
            </div>


            <div className=" bg-base-100 md:py-10 py-5">
                <h2 className="md:text-center md:text-5xl text-2xl ml-5 ">Result Rise Management System divided in Three modules:
                </h2>
                <div className="md:ml-28 ml-5 text-2xl md:font-semibold">
                    <li>Head</li>
                    <li>Teacher</li>
                    <li>Student</li>
                </div>

                <div className="md:text-2xl text-xl md:ml-28  ml-5">
                    <h1 className="md:text-3xl text-2xl my-5">Head Features</h1>
                    <li>Admin Dashboard</li>
                    <li>Admin can add/update/ Class</li>
                    <li>Admin can add/update/ Subjects</li>
                    <li>Admin can add/update/ Active/Inactive Subject combination with class</li>
                    <li>Admin can register new student and also edit info of the student</li>
                    <li>admin can declare/ edit  result of a student</li>
                    <li>Admin can add/ delete the notice.</li>
                    <li>Admin can change own password</li>
                    <li>Admin can Remove Teacher and Student</li>
                </div>
                <div className="md:text-2xl text-xl md:ml-28  ml-5">
                    <h1 className="md:text-3xl text-2xl my-5">Teacher Features</h1>
                    <li>Teacher Dashboard</li>
                    <li>Teacher can Update he/she's profile</li>
                    <li>Teacher can mark the student</li>
                    <li>Teacher can Report the student</li>
                    <li>Teacher can Report Resolved the student</li>

                </div>
                <div className="md:text-2xl text-xl md:ml-28  ml-5">
                    <h1 className="md:text-3xl text-2xl my-5">Student Features</h1>
                    <li>Student Dashboard</li>
                    <li>Student can Update he/she's profile</li>
                    <li>Student can view their result</li>
                    <li>Student can also View the notices.</li>
                </div>
            </div>
            <div className="bg-white">
                <div>
                    <h3 className="md:text-center md:text-5xl text-2xl ml-5">Dashboard Home</h3>

                    <figure className="shadow-2xl"><img className="p-5 md:p-10 " src="https://i.ibb.co/5YZ1pvZ/home.png" alt="home" /></figure>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;