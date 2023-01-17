import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useFirebase } from "../../contax/UserContax";
import AlartMessage from "../../Hooks/AlartMessage";


const login = () => {
    const { successMessage, errorMessage } = AlartMessage()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginEmail, GoogleLogin } = useFirebase()
    const router = useRouter()
    const heandelGoogleSignIn = () => {
        GoogleLogin()
            .then(result => {
                successMessage('login successfull')
                router.push('/')
            }).catch(error => {
                errorMessage(error.message)
            })
    }
    const onSubmit = data => {
        console.log(data);
        loginEmail(data.email, data.password)
            .then(re => {
                successMessage("login Successfull")
                router.push('/')
            })
            .catch(err => {
                errorMessage(err.message)
            })
    }
    return (
        <div className="flex justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md 
            bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
                <h1 className="text-3xl font-semibold text-center text-gray-700 ">Result Rise</h1>
                <form onSubmit={handleSubmit(onSubmit)}
                    className="mt-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.email ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                            {...register("email", { required: 'Email must required' })}
                        />
                        {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 ">Password</label>
                            <a href="/" className="text-xs text-gray-600  hover:underline">Forget Password?</a>
                        </div>
                        <input type="password" placeholder="password" className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.password ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                            {...register("password", { required: 'password must required' })}
                        />
                        {errors.password && <span className="label-text text-red-400">{errors?.password.message}</span>}
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b  lg:w-1/5"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase  hover:underline">
                        or login with Social Media
                    </a>
                    <span className="w-1/5 border-b  lg:w-1/5"></span>
                </div>
                <div className="flex items-center mt-6 -mx-2">
                    <button
                        onClick={() => heandelGoogleSignIn()}
                        type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>
                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>
                </div>
                <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account?
                    <Link href="/user/resister" className="font-medium text-gray-700  hover:underline">Create One</Link>
                </p>
            </div>
        </div >
    );
}
export default login;