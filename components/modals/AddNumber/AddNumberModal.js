import { useForm } from "react-hook-form";
import ButtonUp from "../../Shared/Buttons/SecondaryButton";
import FormTemplate from "../../Shared/FormTemplate/FormTemplate";

function AddNumberModal({ student, setShow }) {
    const { name } = student;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    console.log(student);

    const CommonTableData = [
        { name: "presentation", type: "number", placeholder: "presentation Mark", error: errors.presentation },
        { name: "viva", type: "number", placeholder: "viva Mark", error: errors.viva },
        { name: "classtest", type: "number", placeholder: "classtest Mark", error: errors.classtest },
        { name: "midtermexam", type: "number", placeholder: "midtermexam mark", error: errors.midtermexam },
        { name: "Finalexam", type: "number", placeholder: "Finalexam mark", error: errors.Finalexam }]

    const onSubmit = (data) => {
        console.log(data);

    };
    return (
        <>
            <input type="checkbox" id="add_Number_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setShow(false)} htmlFor="add_Number_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}!</h3>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        {CommonTableData.map((data, i) =>
                            <FormTemplate
                                key={i}
                                data={data}
                                register={register}
                            />)}
                        <br className="py-5" />
                        <ButtonUp>
                            <span>Sign Up </span>
                        </ButtonUp>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddNumberModal;