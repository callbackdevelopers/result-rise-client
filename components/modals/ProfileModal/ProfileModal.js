import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "../../../context/UserContext";
import ButtonUp from "../../Shared/Buttons/SecondaryButton";

const ProfileModal = ({ studentDetails }) => {
    const { firstName, lastName, currentAddress, phone } = studentDetails;
    const { user } = useFirebase()
    // console.log(phone)
    const borderPrimaryColor = 'block w-full p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40'
    const borderErrorColor = 'border-red-700 focus:ring-red-300'
    const borderSuccessColor = 'focus:border-blue-400 focus:ring-blue-300'
    const { register, handleSubmit: handleSave, formState: { errors } } = useForm();
    const { CreateUserEP, updateProfilePic } = useFirebase()

    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3100/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("insite useEffect", data);
    //             setUsers(data);

    //         })
    // }, [])
    const onSubmit = (data) => {
        console.log(data);

        const user = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            currentAddress: data.currentAddress
        }


        fetch(`http://localhost:3100/users/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                } else {

                }
            })

    }


    return (
        <>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Hello {user?.displayName}!</h3>

                    <form
                        onSubmit={handleSave(onSubmit)}
                        className="">
                        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" defaultValue={firstName}

                                    className={`${borderPrimaryColor} ${errors.firstName ? borderErrorColor : borderSuccessColor}`}
                                    {...register("firstName", { required: ' Name must required' })}
                                />
                                {errors.firstName && <span className="label-text text-red-400">{errors?.firstName.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" defaultValue={lastName}
                                    className={`${borderPrimaryColor} ${errors.lastName ? borderErrorColor : borderSuccessColor}`}
                                    {...register("lastName", { required: ' Name must required' })}
                                />
                                {errors.firstName && <span className="label-text text-red-400">{errors?.firstName.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" defaultValue={phone}
                                    className={`${borderPrimaryColor} ${errors.phone ? borderErrorColor : borderSuccessColor}`}
                                    {...register("phone", { required: 'Email must required' })}
                                />
                                {errors.phone && <span className="label-text text-red-400">{errors?.phone.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Current Address</span>
                                </label>
                                <input type="text" defaultValue={currentAddress}
                                    className={`${borderPrimaryColor} ${errors.name ? borderErrorColor : borderSuccessColor}`}
                                    {...register("currentAddress", { required: 'Current Address is required' })}
                                />
                                {errors.currentAddress && <span className="label-text text-red-400">{errors?.currentAddress.message}</span>}
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <ButtonUp><span>Submit</span></ButtonUp>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProfileModal;
