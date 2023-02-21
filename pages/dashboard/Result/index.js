import { useQuery } from "@tanstack/react-query";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { } from 'chart.js/auto';
import Link from "next/link";
import { Line } from 'react-chartjs-2';
import { GrFormNextLink } from "react-icons/gr";
import { MdOutlineFilePresent } from 'react-icons/md';
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
      // console.log(exam);
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
        <div className="h-screen bg-gray-100">
          <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$7,846</p>
                <p className='text-gray-600'>Daily Revenue</p>
              </div>
              <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
              </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$1,437,876</p>
                <p className='text-gray-600'>YTD Revenue</p>
              </div>
              <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
              </p>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
              <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11,437</p>
                <p className='text-gray-600'>Customers</p>
              </div>
              <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
              </p>
            </div>
          </div>
          <div className=""></div>
          <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto px-4 border rounded-lg bg-white flex items-center">
              <Line data={data} />
              <div className="absolute top-7 left-0 w-full hidden lg:block">
                <p className="text-center text-3xl">All Exams Results</p>
              </div>
            </div>
            <div className='w-full col-span-1  lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
              <h1>Complited Semister Results</h1>
              <ul>
                {resultData?.semester_results?.map((finaldata, id) => (
                  <Link className="w-20"
                    href={`/dashboard/result/${finaldata.semesterId}`}
                  >
                    <li
                      key={id}
                      className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
                    >
                      <div className='bg-purple-100 rounded-lg p-3'>
                        <MdOutlineFilePresent className='text-purple-800' />
                      </div>
                      <div className='pl-4'>
                        <p className="w-56">{finaldata.semester} </p>
                      </div>
                      <p className='lg:flex md:hidden px-4'>
                        <GrFormNextLink />
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;