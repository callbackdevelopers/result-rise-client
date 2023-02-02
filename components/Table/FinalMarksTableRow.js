import React from 'react';

const FinalMarksTableRow = ({finalData ,index}) => {

    const {Grade, Point, Grade_Point, credit_hours
        , subject_name, subject_code}  =finalData;

    return (
        <>
        <tr className="border ">
          <th>{index}</th>
          <td>{subject_code}</td>
          <td className="font-semibold">{subject_name}</td>
          <td className="font-semibold">{credit_hours}</td>
          <td className="font-semibold">{Grade}</td>
          <td className="font-semibold">{Point}</td>
          <td className="font-semibold">{Grade_Point}</td>
       
          <td></td>
        </tr>
      </>
    );
};

export default FinalMarksTableRow;