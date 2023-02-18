function InfoModal({ report }) {
    console.log(report);
    return (
        <>
            <input type="checkbox" id="infomodal" className="modal-toggle" />
            <label htmlFor="infomodal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold"> Report {report?.name} in : {report?.reportDate} time:{report?.reportTime}!
                    </h3>
                    <hr className="pt-4" />
                    <p>Status : -{report?.resolved ? " Action taken" : " Pending"}</p>
                    <p className="py-4">
                        Report Info :
                        <br />
                        {report?.report}</p>
                    <hr />
                    <p>reporter mail : {report?.reporterEmail}</p>
                </label>
            </label>
        </>
    );
}

export default InfoModal;