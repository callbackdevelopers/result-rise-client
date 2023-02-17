import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import ButtonUp from '../Shared/Buttons/SecondaryButton';


const WhyUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    const openImage = (i) => {
        setCurrentImg(i);
        setIsOpen(true);
    }

    const closeImage = () => {
        setIsOpen(false);
    }

    const gotoPrevImg = () => {
        setCurrentImg(currentImg - 1);
    }

    const gotoNextImg = () => {
        setCurrentImg(currentImg + 1);
    }

    const modules = [
        {
            "id": 1,
            "name": "Head",
            "features": [

                "Admin Dashboard",
                "Admin can add/update/ Class",
                "Admin can add/update/ Subjects",
                "Admin can add/update/ Active/Inactive Subject combination with class",
                "Admin can register new student and also edit info of the student",
                "Admin can add/ delete the notice.",
                "Admin can change own password",
                "Admin can Remove Teacher and Student",
                "admin can declare/ edit  result of a student"
            ]
        },
        {
            "id": 2,
            "name": "Teacher",
            "features": [

                "Teacher Dashboard",
                "Teacher can Update he/she's profile",
                "Teacher can mark the student",
                "Teacher can Report Resolved the student",
                "Teacher can Report the student"
            ]
        },
        {
            "id": 3,
            "name": "Student",
            "features": [

                "Student Dashboard",
                "Student can Update he/she's profile",
                "A student can see his result in details and download the result",
                "Student can also View the notices."
            ]
        }
    ];

    const services = [

        {
            name: "Profile",
            demoImg: "https://i.ibb.co/5YZ1pvZ/home.png"
        },
        {
            name: "Report",
            demoImg: "https://i.ibb.co/9nSKpxm/Report-RR.png"
        },
        {
            name: "Pending Reported Student",
            demoImg: "https://i.ibb.co/jMZZ6WR/painding-reported-student-RR.png"
        },
        {
            name: "Teacher Delete",
            demoImg: "https://i.ibb.co/tP5XTnj/Teacher-Delete-RR.png"
        },
        {
            name: "Student Add Marks",
            demoImg: "https://i.ibb.co/7pkGCV6/Student-Add-mark-RR.png"
        },
        {
            name: "Pending Student",
            demoImg: "https://i.ibb.co/p4rRvRf/pending-student.png"
        },
        {
            name: "Responsive All features",
            demoImg: "https://i.ibb.co/VthqNZz/mobile-Version.png"
        },
        {
            name: "Responsive Navigate",
            demoImg: "https://i.ibb.co/3WV4chT/resposive.png"
        },
    ];

    return (
        <div>
            <Head><title>Why Us Result-Rise</title></Head>
            <div className="card  rounded-none lg:grid lg:grid-cols-2 md:gap-4">
                <figure className="col-span-1"><img className="max-h-96" src="https://img.freepik.com/free-vector/business-planning-online-service-platform-setting-goal-target-following-schedule-idea-planning-organization-online-management-flat-vector-illustration_613284-2809.jpg?w=740&t=st=1676021685~exp=1676022285~hmac=6773ca6d067688b1c3dafb169e76ccc73326a3fa7d01d5a3735e3d57282c583c" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title md:text-4xl">Result Rise</h2>
                    <p className="font-semibold">Student Result Generating Platform</p>
                    <p>We provide fully customizable Student Result management with Web App for student parents, teachers, and school administration. The apps were designed by <span className="font-semibold">Callback Developers</span> to make it easier for everyone in a school or college to interact and share information. communication is made simpler and each user receives updates on their institute. Simple to use you may move more quickly, save money, and integrate on-premises apps and data anywhere at any time with a web-based Result Rise system.
                    </p>
                </div>
            </div>




            <div className=" py-5">
                <h2 className="text-center md:text-5xl text-2xl  ">Result Rise Management System divided in Three modules:
                </h2>
                <div className=" ">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                        {
                            modules?.map((module, i) => <div key={i} className="card mx-auto  m-0 ">
                                <div className="card-body py-5 px-0  hover:">
                                    <h2 className="font-semibold md:text-2xl text-xl text-center">{module?.name}</h2>
                                    {
                                        module?.features?.map((feature, i) => <li key={i}>{feature}</li>)
                                    }

                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-center md:text-5xl text-2xl ml-5 md:mt-10 mt-5">Institute benefits
                </h2>
                <p className="text-center md:text-2xl text-xl mb-5 md:mb-5">You are getting all the features of our website for free!</p>
                <div className="card grid grid-cols-2 gap-4 md:gap-10 ">
                    <figure className="col-span-1"><img src="https://i.ibb.co/jb377Nb/home-RR.png" alt="Album" /></figure>
                    <div className="card-body px-0">
                        <h2 className="card-title">Major Convenience!</h2>
                        <li>Admin, Teacher and Student Register</li>
                        <li>Unlimited sign-ups within each role</li>
                        <li>Generate results easily</li>
                        <li>Easily communicate with report way use</li>
                        <li>Getting separate dashboard for everyone</li>
                        <li>Free Consultation with Direct Result-Rise Team</li>
                        <li>Trusted benefits advisors</li>
                        <li>Any sign up confirmation check</li>
                    </div>
                </div>
            </div>

            <div className=" py-5">
                <h2 className="text-center md:text-5xl text-2xl ml-5 md:mt-10 mt-5">Dashboard Demo </h2>
                <p className="text-center md:text-2xl text-xl mb-5 md:mb-5">You can see here how friendly website is for you to use</p>
                <div className="grid md:grid-cols-2 gap-4  ">
                    {services?.map((service, i) => (
                        <div key={i} className="card mx-auto m-0 border">
                            <div className="card-body p-5 hover:" onClick={() => openImage(i)}>
                                <p className="font-semibold">{service?.name}</p>
                                <img src={service?.demoImg} className='cursor-zoom-in rounded-md' alt="demoImage" />
                            </div>
                        </div>
                    ))}
                    <ImgsViewer
                        imgs={services?.map(service => ({ src: service?.demoImg }))}
                        currImg={currentImg}
                        isOpen={isOpen}
                        onClickPrev={gotoPrevImg}
                        onClickNext={gotoNextImg}
                        onClose={closeImage}
                    />
                </div>

            </div>

            <div className="  text-white pb-10">
                <div className="grid grid-cols-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black py-5 md:py-10">
                    <p className="col-span-1 text-center">Start Today</p>

                    <Link className="text-center px-10" href="/user/register">
                        <ButtonUp>Register</ButtonUp>
                    </Link>

                </div>
            </div>



        </div >
    );
};

export default WhyUs;