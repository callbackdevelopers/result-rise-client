import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import MidSpinner from "../../../../components/Spiner/MidSpinner";
import { useFirebase } from "../../../../context/UserContext";
import AlertMessage from "../../../../Hooks/AlertMessage";
import Layout from "../../../../Layout/Layout";


const index =()=> {
    const [loading, setLoading] = useState(false);
    const { successMessage } = AlertMessage();
    const router = useRouter();
     const {user} = useFirebase();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    photoURL:user?.photoURL,
    name: user?.displayName

  });
  


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
   console.log('form data', formData);

    fetch("http://localhost:3100/notice", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
            successMessage(
                "Notice post the server"
            );
            // router.push('/dashboard/profile')
          
        });
  }

  if(loading) return <MidSpinner/>

  return (
   <Layout>
        <h1 className="text-center font-semibold">Notice Board</h1>
     <form onSubmit={handleSubmit} className="flex border w-1/2 mx-auto mt-4 p-5 flex-col items-center justify-center">
      <input
        type="text"
        name="title"
        placeholder="title"
        value={formData.title}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs"
      />
      <input
         type="text"
        name="body"
        value={formData.body}
        onChange={handleChange}
        placeholder='message'
        className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-2"
      />
   
      <button className="btn btn-sm mt-2" type="submit">Submit</button>

    </form>
   
   </Layout>
  );
}

export default index;


   