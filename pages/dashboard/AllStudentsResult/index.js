
import Link from "next/link";
import React from "react";
import ButtonUp from "../../../components/Shared/Buttons/SecondaryButton";




const SemesterResult = () => {


  return (
    <div className="">
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

export default SemesterResult;

