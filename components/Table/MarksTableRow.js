


const MarksTableRow = ({ data, index }) => {

  const {
    final_exam_score,
    midterm_score,
    presentation_score,
    subject_code,
    subject_name,
    viva_score
  } = data;

  return (
    <>
      <tr className="border ">
        <th>{index}</th>
        <td>{subject_code}</td>
        <td className="font-semibold">{subject_name}</td>
        <td className="font-semibold">{presentation_score}</td>
        <td className="font-semibold">{midterm_score}</td>
        <td className="font-semibold">{final_exam_score}</td>
        <td className="font-semibold">{viva_score}</td>
        <td></td>
      </tr>
    </>
  );
};

export default MarksTableRow;



