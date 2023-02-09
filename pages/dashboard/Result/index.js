import { useQuery } from "@tanstack/react-query";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { } from 'chart.js/auto';
import Link from "next/link";
import { Line } from 'react-chartjs-2';
import SecondaryButton from "../../../components/Shared/Buttons/SecondaryButton";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import { useFirebase } from "../../../context/UserContext";
import Layout from "../../../Layout/Layout";

const index = () => {
  ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title,
    Tooltip, Legend)
  const { user } = useFirebase();
  const url = `http://localhost:3100/resultdata?email=${user?.email}`;
  const {
    data: resultData = [], refetch, isLoading } = useQuery({
      queryKey: ["resultData", user.email],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();;
        return data[0];
      },
    });
  // console.log(resultData);
  if (isLoading) return <MidSpinner />;

  let datasets = [];
  const exams = resultData?.semester_results?.map(semester => semester.exam_results)
  // console.log(exams);
  const examNames = exams?.map(exam => {
    exam?.map(exam => {
      console.log(exam);
      datasets.push({
        label: exam.subject_name,
        data: [exam.midterm_score, exam.presentation_score, exam.viva_score, exam.final_exam_score,
        ]
      })
    })
  });
  const data = {
    labels: ["Midterm", "Presentation", "Viva", "Final Exam"],
    datasets: datasets,
  };
  refetch()
  return (
    <>
      <Layout>
        {resultData?.length < 1 ?
          <div className="flex h-[80vh] justify-center items-center text-3xl">
            Currently <br /> No Result Here</div> :
          <div className="">
            <div className=" py-2">
              <h2 className="lg:text-2xl text-center">Full Semister Data</h2>
            </div>
            <div className="">
              <Line data={data} />
            </div>
            <div className=" gap-3 p-4">
              <div>
                <div
                  className=" grid md:grid-cols-2 gap-3 mt-5"
                >
                  {resultData?.semester_results?.map((finaldata) => (
                    <div key={finaldata._id}>
                      <Link
                        href={`/dashboard/result/${finaldata.semesterId}`}
                      >
                        <SecondaryButton>
                          {" "}
                          {finaldata.semester}
                        </SecondaryButton>
                      </Link>
                    </div>
                  ))}
                  <hr />
                </div>

              </div>
            </div>
          </div>}
      </Layout>
    </>
  );
};

export default index;