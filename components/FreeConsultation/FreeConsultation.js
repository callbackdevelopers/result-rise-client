import React from "react";
import ButtonArrow from "../Shared/Buttons/PrimaryButton";

const FreeConsultation = () => {
  return (
    <div className="p-10 bg-white">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 justify-around">
      <div className="h h-full  xl:pl-20">
          <img
            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-contact-us_516790-177.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="flex items-center justify-around">
        <div className="bg-slate-100 p-10 pb-14 rounded-lg w-full xl:mr-40">
          <h2 className="text-3xl font-bold">CONTACT US</h2>
          <div className="form-control w-full mt-5">
            <label className="label">
              <span className="label-text">your name *</span>
            </label>
            <input
              type="text"
              placeholder="Write name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mt-3">
            <label className="label">
              <span className="label-text">your email *</span>
            </label>
            <input
              type="email"
              placeholder="Give email address"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mt-3">
            <label className="label">
              <span className="label-text">Your mobile number *</span>
            </label>
            <input
              type="number"
              placeholder="Give mobile number"
              className="input input-bordered w-full"
            />
          </div>
          <div>
          <button className={`relative group overflow-hidden px-4 py-3 mt-8 w-full justify-center rounded-md flex space-x-2 bg-gradient-to-r text-white from-gray-600 via-gray-900 to-black hover:to-blue-900`}> Submit
        </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default FreeConsultation;
