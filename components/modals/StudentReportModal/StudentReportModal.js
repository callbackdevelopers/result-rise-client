import { useFirebase } from "../../../context/UserContext";
import AlertMessage from "../../../Hooks/AlertMessage";

const StudentReportModal = ({ data, setReportStudent }) => {
    const { user } = useFirebase();
    const { successMessage, errorMessage } = AlertMessage();
    const handleAddStudentReport = (event) => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const id = form.id.value;
        const report = form.report.value;
        const department = form.department.value;

        const reportData = {
            photoURL, name, email, id, report, department,
            reportDate: new Date().toDateString(),
            reportTime: new Date().toLocaleTimeString(),
            reporterEmail: user.email,
            resolved: false
        }
        fetch("http://localhost:3100/report", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reportData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successMessage("Your report has been submitted successfully");
                    form.reset();
                    setReportStudent(null)
                }
                else { errorMessage(data.error) }
            })
    };
    return (
        <div>
            <input type="checkbox" id="student-report-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleAddStudentReport} className="modal-box ">
                    <label htmlFor="student-report-modal" className="btn btn-sm btn-warning  btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg">You are reporting to <span className="font-semibold">{data?.name}</span> </h3>
                    <input name="photoURL" defaultValue={data?.photoURL} type="text" hidden />
                    <input name="name" defaultValue={data?.name} type="text" hidden />
                    <input name="email" defaultValue={data?.email} hidden type="text" />
                    <input name="id" defaultValue={data?.id} hidden type="text" />
                    <input name="department" defaultValue={data?.department} hidden type="text" />
                    <input name="uid" defaultValue={user?.uid} hidden type="text" />
                    <textarea name="report" className="textarea textarea-bordered w-full mt-2 md:mt-5" placeholder=" Write your report"></textarea>
                    <div className="modal-action">
                        <button type="submit" htmlFor="student-report-modal" className="btn btn-warning btn-sm">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default StudentReportModal;