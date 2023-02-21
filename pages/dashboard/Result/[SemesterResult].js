import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ResultPdfPrint from "../../../components/PDF/ResultPdf/ResultPdfPrint";
import { useFirebase } from "../../../context/UserContext";
import Layout from "../../../Layout/Layout";


const SemesterResult = () => {
  const { user } = useFirebase();
  const route = useRouter().query;
  const id = route.SemesterResult

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
        <div className=" gap-3  p-7 h-screen bg-gray-100 shadow-md">
          <div className="bg-white  p-4">
            <ResultPdfPrint semesterResult={semesterResult} refetch={refetch} isLoading={isLoading}></ResultPdfPrint>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SemesterResult;

