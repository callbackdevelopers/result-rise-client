import { useForm } from "react-hook-form";

function AddNumberModal({ student, setShow }) {
    const { name } = student;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    console.log(student);
    return (
        <>
            <input type="checkbox" id="add_Number_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setShow(false)} htmlFor="add_Number_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}!</h3>
                    <form action="">

                    </form>
                </div>
            </div>
        </>
    );
}

export default AddNumberModal;