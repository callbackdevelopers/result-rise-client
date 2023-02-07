import React from "react";
import Contact from "./Contact";

const ContactForm = () => {
  return (
    <div className="p-10 bg-white">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 justify-around">
        <div className="h h-full  xl:pl-20">
          <img
            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-contact-us_516790-177.jpg"
            alt=""
            className=""
          />
        </div>

        <div>
          <Contact></Contact>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
