import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
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

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
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
        console.log(user);
    };

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
                                className="w-full bg-white rounded-lg shadow-md 
            bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 p-12"
                            >
                                <h1 className="text-2xl font-semibold tracking-wider capitalize ">
                                    Create your account.
                                </h1>
                                <p className="mt-4 text-gray-400">
                                    Let’s get you all set up so you can verify
                                    your personal account and begin setting up
                                    your profile.
                                </p>
                                <div className="mt-6">
                                    <h1 className="text-gray-400 ">
                                        Select type of the account
                                    </h1>
                                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                                        <button className="flex justify-center w-full px-6 py-3 bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="mx-2">
                                                Student
                                            </span>
                                        </button>

                                        <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2  focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>

                                            <span className="mx-2">
                                                Teacher
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 "
                                >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                {" "}
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${
                                                errors.name
                                                    ? " border-red-700 focus:ring-red-300"
                                                    : "focus:border-blue-400 focus:ring-blue-300"
                                            } focus:outline-none focus:ring focus:ring-opacity-40`}
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
                                            <span className="label-text">
                                                Id Number
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="XXX-XXXXX"
                                            className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${
                                                errors.id
                                                    ? " border-red-700 focus:ring-red-300"
                                                    : "focus:border-blue-400 focus:ring-blue-300"
                                            } focus:outline-none focus:ring focus:ring-opacity-40`}
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
                                            className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${
                                                errors.email
                                                    ? " border-red-700 focus:ring-red-300"
                                                    : "focus:border-blue-400 focus:ring-blue-300"
                                            } focus:outline-none focus:ring focus:ring-opacity-40`}
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
                                            <span className="label-text">
                                                Password
                                            </span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="XXX-XXX-XX-XXX"
                                            className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${
                                                errors.password
                                                    ? " border-red-700 focus:ring-red-300"
                                                    : "focus:border-blue-400 focus:ring-blue-300"
                                            } focus:outline-none focus:ring focus:ring-opacity-40`}
                                            {...register("password", {
                                                required:
                                                    "Password must required",
                                                minLength: 6,
                                            })}
                                        />
                                        {errors.password && (
                                            <span className="label-text text-red-400">
                                                {errors?.password.message}
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        <span>Sign Up </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 rtl:-scale-x-100"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
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
                </section>
            </div>
        </>
    );
};

export default register;
