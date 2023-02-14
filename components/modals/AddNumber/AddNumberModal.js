import React, { useState } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function AddNumberModal({
  student,
  editContactId,
  contacts,
  setShow,
  handleEditFormChange,
  handleEditFormSubmit,
  handleEditClick,
  handleCancelClick,
  handleDeleteClick,
  handleAddFormChange,
  editFormData,
  showdata
}) {
  return (
    <>
      <input type="checkbox" id="add_Number_modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  w-10/12 max-w-4xl  ">
          <label
            onClick={() => setShow(false)}
            htmlFor="add_Number_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-xl font-bold mt-5">{student.student_name}</h1>

          <div className="app-container  ">
            <form onSubmit={handleEditFormSubmit}>
              <table className="table mx-auto">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Presentation Marks</th>
                    <th>Midterm Marks</th>
                    <th>Viva Marks</th>
                    <th>Final Marks</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {contacts.map((contact) => (
                    <>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          contact={contact}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        
                        />
                      ) : (
                        <ReadOnlyRow
                        handleAddFormChange={  handleAddFormChange}
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          showdata={showdata}
                        />
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNumberModal;
