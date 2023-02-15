import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className=" flex flex-col items-center">
      <input
        className="input input-bordered input-sm w-full max-w-xs my-2"
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        className="input input-bordered input-sm w-full max-w-xs my-2"
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        className="input input-bordered input-sm w-full max-w-xs my-2"
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
