import { useForm } from "react-hook-form";
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
        <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black flex">
            <form
                className="w-fit m-auto flex flex-col gap-3"
                onSubmit={handleSubmit(handleResetPassword)}
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="enter your email"
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
                <button
                    type="submit"
                    className=" px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    <span>Reset</span>
                </button>
            </form>
        </div>
    );
};

export default resetPass;
