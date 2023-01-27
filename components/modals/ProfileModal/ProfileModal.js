import { useForm } from "react-hook-form";
import { useFirebase } from "../../../context/UserContext";
import ButtonUp from "../../Shared/Buttons/SecondaryButton";

const ProfileModal = ({ userData }) => {
    const { user } = useFirebase()
    const { photoURL, roll, name, email, address, phone, _id, gender, department } = userData;
    // console.log(phone)
    const borderPrimaryColor = 'block w-full p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40'
    const borderErrorColor = 'border-red-700 focus:ring-red-300'
    const borderSuccessColor = 'focus:border-blue-400 focus:ring-blue-300'
    const { register, handleSubmit: handleSave, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const userData = {
            email: data.email,
            name: data.name,
            phone: data.phone,
            address: data.address
        }
        fetch(`http://localhost:3100/users`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={name}

                                    className={`${borderPrimaryColor} ${errors.name ? borderErrorColor : borderSuccessColor}`}
                                    {...register("name", { required: ' Name must required' })}
                                />
                                {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
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
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" defaultValue={address}
                                    className={`${borderPrimaryColor} ${errors.address ? borderErrorColor : borderSuccessColor}`}
                                    {...register("address", { required: 'Address is required' })}
                                />
                                {errors.address && <span className="label-text text-red-400">{errors?.address.message}</span>}
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
