import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useState } from "react";
import AddNumberModal from "../../../components/modals/AddNumber/AddNumberModal";
import Stdentaddmarks from "../../../components/modals/AddNumber/stdentaddmarks";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";
import Data from "../../../public/mock-data.json";

function index() {
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState([]);
  const [showdata, setShowdata] = useState('')
  const url = `http://localhost:3100/verified/student`;
  const {
    data: students = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const [contacts, setContacts] = useState(Data);
  const [addFormData, setAddFormData] = useState({
    presentation_score: "",
    final_exam_score: "",
    midterm_score: "",
    viva_score: "",
  });

  const [editFormData, setEditFormData] = useState({
    studentName: "",
    presentation_score: "",
    final_exam_score: "",
    midterm_score: "",
    viva_score: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setShowdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));


    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      studentName: addFormData.studentName,
      presentation_score: addFormData.presentation_score,
      final_exam_score: addFormData.final_exam_score,
      midterm_score: addFormData.midterm_score,
      viva_score: addFormData.viva_score,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      studentName: editFormData.studentName,
      presentation_score: editFormData.presentation_score,
      final_exam_score: editFormData.final_exam_score,
      midterm_score: editFormData.midterm_score,
      viva_score: editFormData.viva_score,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);


    const formValues = {
      studentName: contact.studentName,
      presentation_score: contact.presentation_score,
      final_exam_score: contact.final_exam_score,
      midterm_score: contact.midterm_score,
      viva_score: contact.viva_score,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  if (isLoading) return <MidSpinner />;

  return (
    <div>
      <div>
        <Layout>
          <div className='bg-gray-100 min-h-screen'>
            <div className="p-6">
              <Stdentaddmarks
                handleAddFormChange={handleAddFormChange}
                handleAddFormSubmit={handleAddFormSubmit}
                data={students}
              />
            </div>
            <div className="m-4">
              <label
                onClick={() => {
                  setStudent(students), setShow(true);
                }}
                htmlFor="add_Number_modal"
                className="btn btn-sm btn-warning"
              >
                View Marks
              </label>

              {show && (
                <AddNumberModal
                  handleDeleteClick={handleDeleteClick}
                  handleAddFormChange={handleAddFormChange}
                  handleCancelClick={handleCancelClick}
                  handleEditClick={handleEditClick}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handleEditFormChange={handleEditFormChange}
                  contacts={contacts}
                  editFormData={editFormData}
                  editContactId={editContactId}
                  student={student}
                  setShow={setShow}
                  showdata={showdata}
                />
              )}
            </div>
          </div>


        </Layout>
      </div>
    </div>
  );
}

export default index;
