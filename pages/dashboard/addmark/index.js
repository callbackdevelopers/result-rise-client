import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Stdentaddmarks from "../../../components/modals/AddNumber/stdentaddmarks";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import { useFirebase } from "../../../context/UserContext";
import Layout from "../../../Layout/Layout";

function index() {
  const { user } = useFirebase();
  const [showTable, setShowTable] = useState(false);
  const [student, setStudent] = useState([]);

  const { data: userData = [], isLoading, refetch } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3100/users/${user?.email}`)
      const data = await res.json()
      return data[0];
    }
  })
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const admission = target.admission.value;
    const department = target.department.value;
    const subject = target.subject.value;
    const getData = { admission, department, subject }
    loadStudentByQuery(getData);
  };
  const loadStudentByQuery = (getData) => {
    console.log(getData);
    const { admission, department, subject } = getData;
    const url = `http://localhost:3100/students?admission=${admission}&department=${department}&subject=${subject}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
        setShowTable(true);
      });
  }
  if (isLoading) return <MidSpinner />;
  console.log(userData);
  return (
    <div>
      <div>
        <Layout>
          <div className='bg-gray-100 min-h-screen'>
            {!showTable &&
              <form
                onSubmit={handleAddFormChange}
                className="flex items-center h-[80vh] justify-center">
                <div className="border lg:w-2/3 mx-auto bg-white shadow-sm p-4 md:p-7">
                  <div className="text-2xl md:text-3xl text-center">Please Provide The information</div>
                  <div className="flex flex-col items-center justify-center mt-5 p-4 md:p-0">
                    <div className="w-4/5 flex flex-col items-center py-5">
                      <div className="flex items-center w-full md:w-2/3 pt-2">
                        <label className="mx-2 w-full">Select Admissions</label>
                        <input type="text"
                          name="admission"
                          required
                          className="input input-bordered input-sm w-full max-w-xs"
                          placeholder="Enter Admissions year"
                        />
                      </div>
                      <div className="flex items-center w-full md:w-2/3 mt-2">
                        <label className="mx-2 w-full">Select DepartMent</label>
                        <input type="text"
                          name="department"
                          required
                          defaultValue={userData?.department}
                          disabled
                          className="input input-bordered input-sm w-full max-w-xs"
                          placeholder="Enter Department"
                        />
                      </div>
                      <div className="flex items-center w-full md:w-2/3 mt-2">
                        <label className="mx-2 w-full">Enter Subject Code</label>
                        <input
                          required
                          type="text"
                          name="subject"
                          className="input input-bordered input-sm w-full max-w-xs"
                          placeholder="Enter Subject Code"
                        />
                      </div>
                    </div>
                    <div className=" w-full md:w-3/5 text-right">
                      <button
                        type="submit"
                        className="btn btn-sm mt-5">Get Students</button>
                    </div>
                  </div>
                </div>
              </form>}
            <div className="p-6">
              <Stdentaddmarks
                data={student}
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
