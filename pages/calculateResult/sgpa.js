import Link from "next/link";
import ButtonUp from "../../components/Shared/Buttons/SecondaryButton";
import { data } from "../../public/semester.json";

const sgpa = ({ semesterData }) => {
  console.log(semesterData);

  return (
    <div className=" bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 min-h-screen">
      <div className=" py-2">
        <h2 className="lg:text-2xl text-center text-white">Calculate SGPA</h2>
        <p className=" text-center text-white">pick one semester</p>
      </div>
      <div className=" grid lg:grid-cols-2 col-span-1 gap-3 p-4">
        {semesterData.map((singledata) => (
          <Link key={singledata.id} href={`${singledata.id}`}>
            <ButtonUp>{singledata.semester}</ButtonUp>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default sgpa;

export const getStaticProps = async () => {
  return {
    props: { semesterData: data },
  };
};
