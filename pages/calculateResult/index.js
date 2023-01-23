
import Link from "next/link";
import React from "react";
import ButtonUp from "../../components/Shared/Buttons/SecondaryButton";




const calculateResult = () => {


  return (
    <div className=" bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 min-h-screen">
      <div className="pt-40">
        <Link className="" href="/calculateResult/gpa">

          <ButtonUp>Calculate GPA </ButtonUp>{" "}
        </Link>
        <Link href="/calculateResult/sgpa">

          <ButtonUp>Calculate SGPA </ButtonUp>{" "}
        </Link>
      </div>
    </div>
  );
};

export default calculateResult;

