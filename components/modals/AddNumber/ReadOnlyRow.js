

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick,handleAddFormChange }) => {
  return (
    <tr>
      <td>{contact.studentName}</td>
      <td>{handleAddFormChange}</td>
      <td>{contact.presentation_score}</td>
      <td>{contact.final_exam_score}</td>
      <td>{contact.midterm_score}</td>
      <td>{contact.viva_score}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm m-2"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
  
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
