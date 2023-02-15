import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col items-center">
      <input
        className="input input-bordered input-sm w-full max-w-xs my-2 "
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        className="input input-bordered input-sm w-full max-w-xs my-2"
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        className="input input-bordered input-sm w-full max-w-xs my-2"
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
