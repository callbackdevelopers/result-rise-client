function InfoModal({ report }) {
    return (
        <>
            <input type="checkbox" id="infomodal" className="modal-toggle" />
            <label htmlFor="infomodal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">You Report {report?.name} in : {report?.reportDate} time:{report?.reportTime}!
                    </h3>
                    <hr className="pt-4" />
                    <p>Status : -{report?.resolved ? " Action taken" : " Pending"}</p>
                    <p className="py-4">
                        Report Info :
                        <br />
                        {report?.report}</p>
                </label>
            </label>
        </>
    );
}

export default InfoModal;