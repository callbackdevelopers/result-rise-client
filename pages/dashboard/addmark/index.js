import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Stdentaddmarks from "../../../components/modals/AddNumber/stdentaddmarks";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";

function index() {
  const [show, setShow] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [student, setStudent] = useState([]);
  const url = `http://localhost:3100/verified/student`;
  const {
    data: students = [], refetch, isLoading, } = useQuery({
      queryKey: [],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });
  const handleAddFormChange = (event) => {
    event.preventDefault();

  };
  if (isLoading) return <MidSpinner />;

  return (
    <div>
      <div>
        <Layout>

          <div className='bg-gray-100 min-h-screen'>
            {!showTable &&
              <div className="flex items-center h-[80vh] justify-center">
                <div className="border lg:w-2/3 mx-auto bg-white shadow-sm p-4 md:p-7">
                  <div className="text-2xl md:text-3xl text-center">Please Provide The information</div>
                  <div className="flex flex-col items-center justify-center mt-5 p-4 md:p-0">
                    <div className="w-4/5 flex flex-col items-center py-5">
                      <div className="flex items-center w-full md:w-2/3 py-2">
                        <label className="mx-2 w-full">Select Course</label>
                        <select className="input input-bordered input-sm w-full max-w-xs">
                          <option value="1">CSE 101</option>
                          <option value="2">CSE 102</option>
                          <option value="3">CSE 103</option>
                          <option value="4">CSE 104</option>
                          <option value="5">CSE 105</option>
                        </select>
                      </div>
                      <div className="flex items-center w-full md:w-2/3 mt-2">
                        <label className="mx-2 w-full">Select Semester</label>
                        <select className="input input-bordered input-sm w-full max-w-xs">
                          <option value="1">1st</option>
                          <option value="2">2nd</option>
                          <option value="3">3rd</option>
                          <option value="4">4th</option>
                          <option value="5">5th</option>
                          <option value="6">6th</option>
                          <option value="7">7th</option>
                          <option value="8">8th</option>
                        </select>
                      </div>
                      <div className="flex items-center w-full md:w-2/3 mt-2">
                        <label className="mx-2 w-full">Select Section</label>
                        <select className="input input-bordered input-sm w-full max-w-xs">
                          <option value="1">A</option>
                          <option value="2">B</option>
                          <option value="3">C</option>
                          <option value="4">D</option>
                          <option value="5">E</option>
                        </select>
                      </div>
                    </div>
                    <div className=" w-full md:w-3/5 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm mt-5">Get Students</button>
                    </div>
                  </div>
                </div>
              </div>}
            <div className="p-6">
              <Stdentaddmarks
                data={students}
                showTable={showTable}
              />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default index;
