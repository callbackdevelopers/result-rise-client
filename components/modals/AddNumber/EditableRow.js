const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,

  contact,
}) => {
  return (
    <tr>
      <td>{contact.studentName}</td>
      <td>
        <input
          type="number"
          placeholder="Enter a name..."
          className="input input-bordered w-full max-w-xs"
          name="presentation_score"
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="Enter an address..."
          className="input input-bordered w-full max-w-xs"
          name="final_exam_score"
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="Enter a phone number..."
          className="input input-bordered w-full max-w-xs"
          name="midterm_score"
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="Enter an email..."
          className="input input-bordered w-full max-w-xs"
          name="viva_score"
        ></input>
      </td>
      <td>
        <button className="btn btn-sm m-2" type="submit">
          Save
        </button>
        <button
          className="btn btn-sm "
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
