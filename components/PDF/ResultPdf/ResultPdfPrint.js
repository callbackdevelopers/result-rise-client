import { useRef } from "react";
import { SyncLoader } from "react-spinners";
import { useReactToPrint } from "react-to-print";
import AlertMessage from "../../../Hooks/AlertMessage";

function ResultPdfPrint({ semesterResult, isLoading }) {
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
        documentTitle: semester,
        onAfterPrint: () => successMessage("downloaded"),
    });
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <SyncLoader color="#36d7b7" />
            </div>
        );
    }
    return (
        <>
            <div ref={componendRef} style={{ width: '100%' }} className="bg-white">
                <div className="">
                    <div className="p-3">
                        <p className=" p-2  text-white bg-primary rounded-xl">
                            {semester} Exam Marks{" "}
                        </p>
                    </div>
                    <div className="lg:flex lg:justify-between items-end mt-2 px-5">
                        <div>
                            <p className=" ">Name :</p>
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
                    <div className="overflow-x-auto px-5 ">
                        <table
                            className=" table w-full mt-6 shadow border-b">
                            <thead className="text-blue-500">
                                <tr>
                                    <th>Subject code </th>
                                    <th>Subject Name </th>
                                    <th>Midterm </th>
                                    <th>Final </th>
                                    <th>Viva </th>
                                    <th>presentation </th>
                                </tr>
                            </thead>
                            {<tbody>
                                {exam_results?.map((numberdata, i) =>
                                (
                                    <tr className="">
                                        <td>{numberdata?.subject_code}</td>
                                        <td className="font-semibold">{numberdata?.subject_name}</td>
                                        <td className="font-semibold text-center">{numberdata?.midterm_score}</td>
                                        <td className="font-semibold text-center">{numberdata?.final_exam_score}</td>
                                        <td className="font-semibold text-center">{numberdata?.viva_score}</td>
                                        <td className="font-semibold text-center">{numberdata?.presentation_score}</td>
                                    </tr>
                                ))}
                            </tbody>}
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-full text-right mt-4">
                <button
                    className="btn-sm btn btn-warning text-center mr-6"
                    onClick={heandelPrint}
                > download pdf</button>
            </div>
        </>
    );
}
export default ResultPdfPrint;