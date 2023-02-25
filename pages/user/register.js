import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ButtonUp from "../../components/Shared/Buttons/SecondaryButton";
import FormOptionTemplate from "../../components/Shared/FormTemplate/FormOptionTemplate";
import FormTemplate from "../../components/Shared/FormTemplate/FormTemplate";
import Spiner from "../../components/Spiner/Spiner";
import { useFirebase } from "../../context/UserContext";
import AlertMessage from "../../Hooks/AlertMessage";

const register = () => {
    const { successMessage, errorMessage } = AlertMessage();
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { CreateUserEP, updateProfilePic, verifyEmail } = useFirebase();

    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        // console.log(data);
        setLoading(true);
        const id = data.id;
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const phone = data.phone;
        const photo = data.photo[0];
        const address = data.address;
        const birth = data.birth;
        const semester = data.semester;
        const gender = data.gender;
        const subject = data.subject;
        const department = data.department;
        const dataCreated = new Date();
        const verification = false;
        const Session = new Date().getFullYear();

        //differentiate users data. like : student, teacher and head
        if (tabIndex === 0) {
            data.subject = undefined;
            const user = {
                name, email, password, id, semester,
                department, address, phone, gender, birth,
                dataCreated, roll: "student", verification, Session
            };
            imageHosting(photo, user);
        } else if (tabIndex === 1) {
            data.semester = undefined;
            const user = {
                name, email, password, id,
                subject, gender, birth, dataCreated,
                department, address, phone, roll: "teacher", verification, Session
            };
            imageHosting(photo, user);
        } else if (tabIndex === 2) {
            data.semester = undefined;
            data.subject = undefined;
            const user = {
                name, email, password, id, department,
                address, phone, gender, birth,
                dataCreated, roll: "head", verification, Session
            }
            imageHosting(photo, user);
        } else { console.log("error"); }
    };
    //image upload
    const imageHosting = (data, user) => {
        // console.log(user);
        const imageBBapi = 'a0199ee9f89b265b565a793dcf77ab64';
        const formData = new FormData();
        formData.append('image', data)
        const urL = `https://api.imgbb.com/1/upload?key=${imageBBapi}`
        fetch(urL, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(img => {
                if (img.success) {
                    user['photoURL'] = img.data.url;
                    handleCreateUser(user);
                }
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
    }
    //create user
    const handleCreateUser = (user) => {
        const { email, password, name, photoURL } = user;
        // console.log(email, password, name, photoURL);
        CreateUserEP(email, password)
            .then((res) =>
                updateProfilePic(name, photoURL)
                    .then((res) => {
                        handleVerifyEmail(user);
                        reset();
                    })
                    .catch((err) => {
                        errorMessage(err.message);
                        setLoading(false);
                    })
            )
            .catch((err) => {
                setLoading(false);
                errorMessage(err.message);
            });
    }
    //verify email
    const handleVerifyEmail = (user) => {
        verifyEmail().then(() => {
            handlePostData(user);
            console.log("Email verification sent.");
        });
    };
    //post data to server 
    const handlePostData = (user) => {
        fetch("http://localhost:3100/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                successMessage(
                    "Account created,Please Got to Your Email & verify your email."
                );
                router.push('/dashboard/profile')
            });
    }

    //common input data
    const CommonTableData = [
        { name: "name", type: "text", placeholder: "Name", error: errors.name },
        { name: "id", type: "number", placeholder: "ID", error: errors.id },
        { name: "email", type: "email", placeholder: "Email", error: errors.email },
        { name: "password", type: "password", placeholder: "Password", error: errors.password },
        { name: "photo", type: "file", placeholder: "Photo", error: errors.photo },
        { name: "phone", type: "number", placeholder: "Phone", error: errors.phone },
        { name: "address", type: "text", placeholder: "Address", error: errors.address },
        { name: "date", type: "date", placeholder: "date of birth", error: errors.date },

    ]
    //student table data
    const semisterStudent =
    {
        name: "semester", type: "file", placeholder: "Photo", error: errors.photo,
        options: [{ value: "1st" }, { value: "2nd" }, { value: "3rd" }, { value: "4th" },
        { value: "5th" }, { value: "6th" }, { value: "7th" }, { value: "8th" }]
    }
    const genderData =
    {
        name: "gender", placeholder: "gender", error: errors.gender, options: [{
            value: 'male'
        }, { value: 'female' }]
    }
    const teacherSubject =
        { name: "Subject", type: "text", placeholder: "Subject-code", error: errors.Subject }

    const departmentData = {
        name: "department", placeholder: "department", error: errors.department, options: [{
            value: 'CSE'
        }, { value: 'EEE' }, { value: 'BBA' }, { value: 'English' }, { value: 'Math' },
        { value: 'Physics' }, { value: 'Chemistry' }]
    }

    return (
        <>
            <Head>
                <title>ResultRise - Register</title>
            </Head>
            <div>
                <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
                    <div className="flex justify-center min-h-screen ">
                        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 ">
                            <div className="w-full bg-white rounded-lg shadow-md 
            bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 p-7" >
                                <h1 className="text-2xl font-semibold tracking-wider capitalize ">
                                    Create your account.</h1>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <Tabs className='mt-5' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                        <TabList>
                                            <Tab><p className="px-4">Student</p></Tab>
                                            <Tab><p className="px-4">Teacher</p> </Tab>
                                            <Tab><p className="px-4">Head</p> </Tab>
                                        </TabList>
                                        <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 ">
                                            {CommonTableData.map((data, i) =>
                                                <FormTemplate
                                                    key={i}
                                                    data={data}
                                                    register={register}
                                                />)}
                                        </div>
                                        <TabPanel >
                                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                                <FormOptionTemplate
                                                    data={semisterStudent}
                                                    register={register}
                                                />
                                                <FormOptionTemplate
                                                    data={genderData}
                                                    register={register}
                                                />
                                                <FormOptionTemplate
                                                    data={departmentData}
                                                    register={register}
                                                />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="grid grid-cols-1 gap-6  md:grid-cols-3">
                                                <FormTemplate
                                                    key={1}
                                                    data={teacherSubject}
                                                    register={register}
                                                />
                                                <FormOptionTemplate
                                                    data={genderData}
                                                    register={register}
                                                />
                                                <FormOptionTemplate
                                                    data={departmentData}
                                                    register={register}
                                                />
                                            </div>
                                        </TabPanel>
                                        <TabPanel >
                                            <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
                                                <FormOptionTemplate
                                                    data={genderData}
                                                    register={register}
                                                />
                                                <FormOptionTemplate
                                                    data={departmentData}
                                                    register={register}
                                                />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                    <div className="mt-5">
                                        <ButtonUp>
                                            {loading ?
                                                <Spiner
                                                    color={"#fff"}
                                                    height={15} />
                                                : <span>Sign Up </span>}
                                        </ButtonUp>
                                    </div>
                                </form>
                                <p className="mt-3 text-xs font-light text-center text-gray-400">
                                    {" "}
                                    Already have an account?{" "}
                                    <Link
                                        href="/user/login"
                                        className="font-medium text-gray-700 hover:underline"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default register;