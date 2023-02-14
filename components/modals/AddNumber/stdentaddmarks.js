


const Stdentaddmarks = ({ data,handleAddFormSubmit,handleAddFormChange }) => {


  
  return (
    <section>
      {/* add marks section */}
      <div className="border">
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
          {data?.map((examResult, inx) => (
            <>
              <form
              onSubmit={handleAddFormSubmit}
               className=" form-control grid grid-cols-7 lg:gap-4 md:gap-3 gap-1 items-center my-2">
                <span className="mx-2  w-10">{inx}</span>
                <label className=" lg:mr-4 lg:ml-[-50px] md:ml-[-50px] ml-[-25px]">
                  {examResult.name}
                </label>
                <input
                  type="number"
                  className="input input-bordered lg:w-40  lg:ml-[-70px] md:ml-[-50px] max-w-xs"
                  placeholder="presenatation marks"
                  name="presentation_score"
                  onChange={handleAddFormChange}
                ></input>

                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="midterm marks"
                  name="midterm_score"
                  onChange={handleAddFormChange}
                ></input>

                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="final marks"
                  name="final_exam_score"
                  onChange={handleAddFormChange}
                ></input>

                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="viva marks"
                  name="viva_score"
                  onChange={handleAddFormChange}
                ></input>

                <button className="mx-2 btn btn-xs " type="submit">
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
