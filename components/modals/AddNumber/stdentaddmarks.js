import { useState } from "react";

const Stdentaddmarks = ({ data }) => {
  const [studentId, setStudentId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const form = event.target;
    const presentation_score = form.presentation_score.value;
    const midterm_score = form.midterm_score.value;
    const final_exam_score = form.final_exam_score.value;
    const viva_score = form.viva_score.value;
    console.log(presentation_score, midterm_score, final_exam_score, viva_score, studentId);
    const studentResult = {
      presentation_score, midterm_score, final_exam_score, viva_score,
    }
    fetch(`http://localhost:3100/addResult/${studentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentResult),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }
      );
  };
  return (
    <section>
      {/* add marks section */}
      <div className="border bg-white ">
        <ul className="flex  justify-between gap-2 border bg-gray-200 lg:p-2 lg:text-lg text-[8px]">
          <li> SL </li>
          <li> Name </li>
          <li> Presentation marks </li>
          <li> Midterm Marks </li>
          <li> Viva Marks </li>
          <li> Final Marks </li>
          <li> Status </li>
        </ul>
        <div>
          {data?.map((examResult) => (
            <>
              <form
                onSubmit={handleAddFormChange}
                key={examResult._id}
                className=" form-control grid grid-cols-7 lg:gap-4 md:gap-3 gap-1 items-center my-2">
                <span className="mx-2  w-10">{examResult.id}</span>
                <label className=" lg:mr-4 lg:ml-[-50px] md:ml-[-50px] ml-[-25px]">
                  {examResult.name}
                </label>
                <input
                  type="number"
                  className="input input-bordered lg:w-40  lg:ml-[-100px] md:ml-[-50px] max-w-xs input-sm w-full "
                  placeholder="presenatation marks"
                  name="presentation_score"
                ></input>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full max-w-xs"
                  placeholder="midterm marks"
                  name="midterm_score"
                ></input>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full max-w-xs"
                  placeholder="final marks"
                  name="final_exam_score"
                ></input>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full max-w-xs"
                  placeholder="viva marks"
                  name="viva_score"
                ></input>
                <button
                  onClick={() => setStudentId(examResult.id)}
                  className="mx-2 btn btn-xs " type="submit">
                  Add
                </button>
              </form>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stdentaddmarks;
