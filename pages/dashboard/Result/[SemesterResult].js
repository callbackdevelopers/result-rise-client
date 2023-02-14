import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResultPdfPrint from "../../../components/PDF/ResultPdf/ResultPdfPrint";
import { useFirebase } from "../../../context/UserContext";
import Layout from "../../../Layout/Layout";


const SemesterResult = () => {
  const { user } = useFirebase();
  const route = useRouter().query;
  const conponentRef = useRef();
  const heandelPrint = useReactToPrint({
    content: () => conponentRef.current,
    documentTitle: "Semester Result",
    // onAfterPrint: () => alert("Printed"),
  });
  const id = route.SemesterResult
  // console.log(semesterResult);

  const { data: semesterResult = [], refetch, isLoading } = useQuery({
    queryKey: [id, user?.email, 'semesterResult'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3100/resultdata/${id}?email=${user?.email}`)
      const data = await res.json()
      return data;
    }
  })
  return (
    <>
      <Layout>
        <div className=" gap-3 p-4">
          <ResultPdfPrint semesterResult={semesterResult} refetch={refetch} isLoading={isLoading}></ResultPdfPrint>
        </div>
      </Layout>
    </>
  );
};

export default SemesterResult;

