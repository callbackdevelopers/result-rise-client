import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import 'react-tabs/style/react-tabs.css';
import ButtonUp from "../../components/Shared/Buttons/SecondaryButton";
import { useFirebase } from "../../context/UserContext";
import AlertMessage from "../../Hooks/AlertMessage";

const register = () => {
    const { successMessage, errorMessage } = AlertMessage();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { CreateUserEP, updateProfilePic, verifyEmail } = useFirebase();
    //some reasonable classes
    const borderPrimaryColor = 'block w-full p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40'
    const borderErrorColor = 'border-red-700 focus:ring-red-300'
    const borderSuccessColor = 'focus:border-blue-400 focus:ring-blue-300'


    const onSubmit = (data) => {
        console.log(data);
        const name = data.firstName;
        const email = data.email;
        const password = data.Password;
        const id = data.id;
        const user = {
            name,
            email,
            password,
            id,
        };
        CreateUserEP(email, password)
            .then((res) =>
                updateProfilePic(name)
                    .then((res) => {
                        handleVerifyEmail();
                        reset();
                    })
                    .catch((err) => {
                        errorMessage(err.message);
                    })
            )
            .catch((err) => {
                errorMessage(err.message);
            });
    };
    const [value, setValue] = useState("");
    console.log(value);

    const handleVerifyEmail = () => {
        verifyEmail().then(() => {
            successMessage(
                "Email verification sent. Please, verify your email."
            );
            console.log("Email verification sent.");
        });
    };
    return (
        <>
            <Head>
                <title>ResultRise - Register</title>
            </Head>
            <div>
                <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
                    <div className="flex justify-center min-h-screen ">
                        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 ">
                            <div
                                className="w-full bg-white rounded-lg shadow-md bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 p-12">
                                <h1 className="text-2xl font-semibold tracking-wider capitalize ">
                                    Create your account.
                                </h1>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 "
                                >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className={`${borderPrimaryColor} ${errors.name ? borderErrorColor : borderSuccessColor}`}
                                            {...register("name", {
                                                required: " Name must required",
                                            })}
                                        />
                                        {errors.name && (
                                            <span className="label-text text-red-400">
                                                {errors?.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Id Number</span>
                                        </label>
                                        <input type="text" placeholder="XXX-XXXXX"
                                            className={`${borderPrimaryColor} ${errors.id ? borderErrorColor : borderSuccessColor}`}
                                            {...register("id", {
                                                required: "id must required",
                                            })}
                                        />
                                        {errors.id && (
                                            <span className="label-text text-red-400">
                                                {errors?.id.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className={`${borderPrimaryColor} ${errors.email ? borderErrorColor : borderSuccessColor}`}
                                            {...register("email", {
                                                required: "Email must required",
                                            })}
                                        />
                                        {errors.email && (
                                            <span className="label-text text-red-400">
                                                {errors?.email.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type=""
                                            placeholder="XXX-XXX-XX-XXX"
                                            className={`${borderPrimaryColor} ${errors.Password ? borderErrorColor : borderSuccessColor}`}
                                            {...register("Password", {
                                                required:
                                                    "Password must required",
                                                minLength: 6,
                                            })}
                                        />
                                        {errors.Password && (
                                            <span className="label-text text-red-400">
                                                {errors?.Password.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input
                                            type="file"
                                            className="file-input file-input-bordered  file-input-sm"
                                            {...register("photo", {
                                                required: "Photo must required",
                                            })}
                                        />
                                        {errors.photo && (
                                            <span className="label-text text-red-400">
                                                {errors?.photo.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input
                                            type="address"
                                            placeholder="dhaka,bangladesh"
                                            className={`${borderPrimaryColor} ${errors.id ? borderErrorColor : borderSuccessColor}`}
                                            {...register("address", {
                                                required: "address must required",
                                            })}
                                        />
                                        {errors.address && (
                                            <span className="label-text text-red-400">
                                                {errors?.address.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Department</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="CSE"
                                            className={`${borderPrimaryColor} ${errors.id ? borderErrorColor : borderSuccessColor}`}
                                            {...register("department", {
                                                required: "department must required",
                                            })}
                                        />
                                        {errors.department && (
                                            <span className="label-text text-red-400">
                                                {errors?.department.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">type of the account</span>
                                        </label>

                                        <div>
                                            <select value={value}
                                                className={`${borderPrimaryColor} ${errors.id ? borderErrorColor : borderSuccessColor}`}
                                                {...register("type")}
                                                onChange={(e) => setValue(e.target.value)}>
                                                <option value="">Select</option>
                                                <option value="student">Student</option>
                                                <option value="teacher">Teacher</option>
                                            </select>
                                        </div>
                                    </div>

                                    {value === 'teacher' ??
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Department</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="CSE"
                                                className={`${borderPrimaryColor} ${errors.id ? borderErrorColor : borderSuccessColor}`}
                                                {...register("department", {
                                                    required: "department must required",
                                                })}
                                            />
                                            {errors.department && (
                                                <span className="label-text text-red-400">
                                                    {errors?.department.message}
                                                </span>
                                            )}
                                        </div>}

                                    <ButtonUp>
                                        <span>Sign Up </span>
                                    </ButtonUp>
                                </form>
                                <p className="mt-8 text-xs font-light text-center text-gray-400">
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
                </section >
            </div >
        </>
    );
};

export default register;
