import React from 'react';

const ShowReportModal = ({ report }) => {
    // console.log(report)

    return (
        <div>

            <input type="checkbox" id="show-report-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Reported Student!</h3>
                    <p className="py-4">Name: <span className="font-semibold">{report?.name},</span> ID: <span className="font-semibold">{report?.id}, </span> Department of <span className="font-semibold">{report?.department}</span></p>
                    <p>Report</p>
                    <hr />
                    <p>{report?.report}</p>

                    <div className="modal-action">
                        <label htmlFor="show-report-modal" className="btn btn-outline btn-warning">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReportModal;