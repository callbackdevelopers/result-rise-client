import Head from "next/head";
import { useForm } from "react-hook-form";
import ButtonUp from "../../components/Shared/Buttons/SecondaryButton";
import { useFirebase } from "../../context/UserContext";
import AlertMessage from "../../Hooks/AlertMessage";

const resetPass = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { successMessage, errorMessage } = AlertMessage();
    const { resetPassword } = useFirebase();

    const handleResetPassword = (data) => {
        const email = data.email;

        resetPassword(email)
            .then(() => {
                successMessage("Password reset email sent!");
                console.log("Password reset email sent!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                errorMessage(errorMsg);
                console.log(errorCode, errorMsg);
            });
    };

    return (
        <>
            <Head>
                <title>ResultRise - Reset Password</title>
            </Head>
            <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black flex">
                <div
                    className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md 
            bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100"
                >
                    <h1 className="text-3xl font-semibold text-center mb-3 text-gray-700 ">
                        ResultRise
                    </h1>
                    <form
                        className="w-fit m-auto flex flex-col gap-3"
                        onSubmit={handleSubmit(handleResetPassword)}
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="enter your email"
                                className={`block w-full px-12 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.email
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
                        <ButtonUp type="submit">
                            <span>Reset</span>
                        </ButtonUp>
                    </form>
                </div>
            </div>
        </>
    );
};

export default resetPass;
