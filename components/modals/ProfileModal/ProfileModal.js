import { useForm } from "react-hook-form";
import { useFirebase } from "../../../contax/UserContax";

const ProfileModal = () => {
    const { register, handleSubmit: handleSave, formState: { errors } } = useForm();
    const { CreateUserEP, updateProfilePic } = useFirebase()
    const onSubmit = (data) => {
        console.log(data);
    }



    return (
        <div className="modal" id="my-modal-2">
            <div className="modal-box">
                <section className="bg-white ">
                    <div className="flex justify-center min-h-screen">

                        <div className="flex w-full mx-auto ">
                            <div className="w-full">


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
                                    <div className="modal-action mr-0">
                                        <a href="#" className="btn">Save</a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ProfileModal;