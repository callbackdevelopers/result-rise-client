import { useState } from "react";
import { useForm } from "react-hook-form";
import ResultPdfPrint from "../../components/PDF/ResultPdf/ResultPdfPrint";
import FormOptionTemplate from "../../components/Shared/FormTemplate/FormOptionTemplate";
import FormTemplate from "../../components/Shared/FormTemplate/FormTemplate";


const index = () => {
  const [studentType, setStudentType] = useState(null);
  const {
    register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { id, registration, department, semister } = data;
    // console.log('submit data ', id, registration, department, semister);
    fetch('http://localhost:3100/students/outsied', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, registration, department, semister })
    })
      .then(res => res.json())
      .then(data => {
        setStudentType(data);
        // console.log('data', data);
      })
  };
  const CommonTableData = [
    { name: "id", type: "number", placeholder: "student Id", error: errors.id },
    { name: "registration", type: "number", placeholder: "registration", error: errors.registration },
  ]
  const semisterStudent =
  {
    name: "semister", type: "file", placeholder: "Photo", error: errors.photo,
    options: [{ value: "1st" }, { value: "2nd" }, { value: "3rd" }, { value: "4th" },
    { value: "5th" }, { value: "6th" }, { value: "7th" }, { value: "8th" }]
  }
  const departmentData = {
    name: "department",
    placeholder: "department",
    error: errors.department,
    options: [
      { value: "CSE" }, { value: "EEE" }, { value: "BBA" }, { value: "English" },
      { value: "Math" }, { value: "Physics" }, { value: "Chemistry" },
    ],
  };

  return (
    <>
      {!studentType &&
        <div className=" lg:w-1/2 md:w-1/2 mx-auto  mt-4 md:border md:p-0  ">
          <div className="flex bg-[#EEEEEE] items-center justify-around  ">
            <div className="p-2 ">
              <img
                className="w-20 rounded-full border border-blue-500"
                src="https://t4.ftcdn.net/jpg/04/17/63/43/360_F_417634360_CAqmr3OA7PmdGb6VdyTK0e7o4jkwuIUw.jpg"
              />
            </div>
            <div className="">
              <h3 className="p-2 font-bold lg:text-lg md:text-lg">Ministry of Education</h3>
              <hr className="" />
              <h4 className="lg:p-2 md:p-2 lg:text-xl md:text-xl">Get Your Result form Here Without Login</h4>
              <h6 className="p-2  ">
                <small className=" lg:ml-40  ">  Official website of Result Rice Team</small>
              </h6>
            </div>
          </div>

          <div className=" lg:p-12  ">
            <form className="border md:border-gray-400 p-5 " onSubmit={handleSubmit(onSubmit)}>
              <FormOptionTemplate data={departmentData} register={register} />
              <FormOptionTemplate
                data={semisterStudent}
                register={register}
              />
              <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 ">
                {CommonTableData.map((data, i) => (
                  <FormTemplate key={i} data={data} register={register} />
                ))}
              </div>
              <div className="flex   justify-end gap-2 m-4">
                <button className="btn btn-sm " onClick={() => reset()}>reset</button>

                <input
                  htmlFor="resutl_out-modal"
                  type="submit" className="btn btn-sm"
                />
              </div>
            </form>
          </div>
          <div className="bg-[#EEEEEE] p-5 rounded-t-sm">
            <small> &copy;  power by result rise , all rights reserved</small>
          </div>
        </div>}
      {studentType &&
        <div className=" lg:w-4/5  mx-auto  mt-4 md:border p-5  ">

          <ResultPdfPrint semesterResult={studentType}></ResultPdfPrint>
          <button
            className="btn btn-sm btn-warning"
            onClick={() => setStudentType(null)}>Go back</button>
        </div>
      }
    </>

  );
};

export default index;
