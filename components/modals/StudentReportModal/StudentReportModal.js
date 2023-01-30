

const StudentReportModal = () => {




    return (
        <div>
            <input type="checkbox" id="student-report-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="student-report-modal" className="btn btn-sm btn-warning  btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg"></h3>
                    <p>Report here</p>
                    <textarea className="textarea textarea-bordered w-full mt-2 md:mt-5" placeholder="Write your report"></textarea>
                    <div className="modal-action">
                        <label htmlFor="student-report-modal" className="btn btn-warning btn-sm">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentReportModal;