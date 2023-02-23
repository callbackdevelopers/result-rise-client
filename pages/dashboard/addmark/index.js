import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Stdentaddmarks from "../../../components/modals/AddNumber/stdentaddmarks";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";

function index() {
  const [show, setShow] = useState(false);
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
            <div className="p-6">
              <Stdentaddmarks
                data={students}
              />
            </div>
            <div className="m-4">
              <label
                onClick={() => {
                  setStudent(students), setShow(true);
                }}
                htmlFor="add_Number_modal"
                className="btn btn-sm btn-warning"
              >
                View Marks
              </label>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default index;
