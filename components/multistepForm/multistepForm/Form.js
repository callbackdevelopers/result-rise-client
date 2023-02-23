import React, { useState } from "react";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Give Some info", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <div className="">
        <div className="flex flex-col items-center w-full">
          <input
            className="input input-bordered input-sm w-full  my-2 "
            type="text"
            placeholder="Email..."
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          <input
            className="input input-bordered input-sm w-full my-2"
            type="text"
            placeholder="Password..."
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <input
            className="input input-bordered input-sm w-full my-2"
            type="text"
            placeholder="Confirm Password..."
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData({ ...formData, confirmPassword: event.target.value })
            }
          />
        </div>
      </div>


    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form  flex w-full justify-center items-center">
      <div className="form-container border p-5 max-w-3xl">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          {PageDisplay()}
        </div>
        <div className="footer mt-4">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
