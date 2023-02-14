import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AlertMessage from "../../../Hooks/AlertMessage";

function ResultPdfPrint({ semesterResult }) {
    const { successMessage } = AlertMessage()
    const {
        semester,
        season,
        exam_results,
        department,
        Addmission,
    } = semesterResult;
    const componendRef = useRef();
    const heandelPrint = useReactToPrint({
        content: () => componendRef.current,
        documentTitle: semester + season,
        onAfterPrint: () => successMessage("downloaded"),
    });
    return (
        <>
            <div ref={componendRef} style={{ width: '100%' }}>
                <div className="  m-5 p-5">
                    <div className="">
                        <p className=" p-2  text-white bg-primary rounded-xl">
                            {semester} Exam Marks{" "}
                        </p>
                    </div>
                    <div className="lg:flex lg:justify-between items-end">
                        <div>
                            <p className=" ">Matric No: T19248</p>
                            <p className="">Registration NO: 092836293223</p>
                            <p className="font-bold">Semester: {season}</p>
                        </div>
                        <div className="">
                            <p className=" mt-2">Department: {department}</p>
                            <p className="">Admission: {Addmission}</p>
                            <p className="">programme: Bachelor Program</p>
                            <p className="font-bold">Semester Enrolled: {semester} </p>
                        </div>
                    </div>

                    <div className="overflow-x-auto ">
                        <table className=" table w-full ">
                            <thead className="text-blue-500">
                                <tr>
                                    <th>Sl No</th>
                                    <th>Subject code </th>
                                    <th>Subject Name </th>
                                    <th>Midterm </th>
                                    <th>Final </th>
                                    <th>Viva </th>
                                    <th>presentation </th>
                                </tr>
                            </thead>
                            <tbody>
                                {exam_results?.map((numberdata, i) => (
                                    <tr className="">
                                        <td>{i + 1}</td>
                                        <td>{numberdata?.subject_code}</td>
                                        <td className="font-semibold">{numberdata?.subject_name}</td>
                                        <td className="font-semibold text-center">{numberdata?.midterm_score}</td>
                                        <td className="font-semibold text-center">{numberdata?.final_exam_score}</td>
                                        <td className="font-semibold text-center">{numberdata?.viva_score}</td>
                                        <td className="font-semibold text-center">{numberdata?.presentation_score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div className="">
                <button className="btn-sm btn btn-warning text-center" onClick={heandelPrint}> download pdf</button>
            </div>
        </>
    );
}

export default ResultPdfPrint;