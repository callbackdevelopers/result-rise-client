import React from 'react';
import AlertMessage from '../../../Hooks/AlertMessage';

const ConfirmationModal = ({ setResolve, modalData, refetch }) => {
    const { successMessage, errorMessage } = AlertMessage();

    const handleResolved = (modalData) => {
        fetch(`http://localhost:3100/resolved/${modalData._id}`, {
            method: "PUT"
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    successMessage("Resolved !");
                }
                else {
                    errorMessage("Something went wrong, Please try again")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do you really want to {modalData?.name} resolved?</h3>
                    <p className="py-4">If you once resolved then this button will be disabled for you!!</p>
                    <div className="modal-action">
                        <label onClick={() => handleResolved(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn btn-success  mb-3 text-white">Confirm</label>
                        <label onClick={() => setResolve(null)}
                            htmlFor="confirmation-modal" className="btn btn-outline btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;