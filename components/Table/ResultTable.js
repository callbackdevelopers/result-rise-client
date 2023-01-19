import React from 'react';

const ResultTable = () => {
    return (
        <div className="  m-5 p-5">
        <div className="p-[1px] bg-blue-500 rounded-lg text-white">
          <div className="mt-2">
            <p className=" p-[4px] w-28  bg-primary rounded-xl">Result View </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between  items-end">
          <div>
            <p className=" ">Matric No: T19248</p>
            <p className="">Registration NO: 092836293223</p>
            <p className="font-bold">Semester: spring-2023</p>
          </div>
          <div>
            <p className=" mt-2">Department: Electronic and telecommunication</p>
            <p className="">Admission: spring-2022</p>
            <p className="">programme: Bachelor Program</p>
            <p className="font-bold">Semester Enrolled: First Semester</p>
          </div>
        </div>
  
        <div className="overflow-x-auto border">
          <table className=" table w-full ">
            <thead className="text-blue-500">
              <tr>
                <th>SL</th>
                <th>course code </th>
                <th>course Name </th>
                <th>credit hours</th>
                <th>Grade</th>
                <th>Point</th>
                <th>Grade Point</th>
                <th>comment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border ">
                <th>1</th>
                <td>CSE-1105</td>
                <td>Computer </td>
                <td>0.75</td>
                <td>B+</td>
                <td>3.13</td>
                <td>2.44</td>
                <td></td>
              </tr>
              <tr className="border ">
                <th className="bg-blue-100">2</th>
                <td className="bg-blue-100">EEE-2105</td>
                <td className="bg-blue-100">Electrical ciruits</td>
                <td className="bg-blue-100">0.75</td>
                <td className="bg-blue-100">B+</td>
                <td className="bg-blue-100">3.13</td>
                <td className="bg-blue-100">2.44</td>
                <td className="bg-blue-100"></td>
              </tr>
              <tr className="border ">
                <th>3</th>
                <td>MT-1105</td>
                <td>Math</td>
                <td>0.75</td>
                <td>B+</td>
                <td>3.13</td>
                <td>2.44</td>
                <td></td>
              </tr>
              <tr className="border ">
                <th className="bg-blue-100">4</th>
                <td className="bg-blue-100">EFT-1405</td>
                <td className="bg-blue-100">Fundamental</td>
                <td className="bg-blue-100">0.75</td>
                <td className="bg-blue-100">B+</td>
                <td className="bg-blue-100">3.13</td>
                <td className="bg-blue-100">2.44</td>
                <td className="bg-blue-100"></td>
              </tr>
  
              <tr className="border ">
                <th></th>
                <td></td>
                <td className="font-semibold">Total Credit Hours</td>
                <td className="font-semibold">13.75</td>
                <td className="font-semibold">GPA</td>
                <td className="font-semibold">1.23</td>
                <td className="font-semibold">16.23</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ResultTable;