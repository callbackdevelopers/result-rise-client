import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import ResultPdfPrint from "../../../components/PDF/ResultPdf/ResultPdfPrint";
import { useFirebase } from "../../../context/UserContext";
import Layout from "../../../Layout/Layout";


const SemesterResult = () => {
  const { user } = useFirebase();
  const [semesterResult, setSemesterResult] = useState({})
  const route = useRouter().query;
  const conponentRef = useRef();
  const heandelPrint = useReactToPrint({
    content: () => conponentRef.current,
    documentTitle: "Semester Result",
    // onAfterPrint: () => alert("Printed"),
  });
  const id = route.SemesterResult
  // console.log(semesterResult);

  useEffect(() => {
    fetch(`http://localhost:3100/resultdata/${id}?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setSemesterResult(data)
      })
  }, [id, user?.email])

  return (
    <>
      <Layout>
        <div className=" gap-3 p-4">
          <ResultPdfPrint semesterResult={semesterResult}></ResultPdfPrint>
        </div>
      </Layout>
    </>
  );
};

export default SemesterResult;

