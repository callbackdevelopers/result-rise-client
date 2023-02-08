import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import AlertMessage from '../../Hooks/AlertMessage';

const Contact = () => {
  const { successMessage } = AlertMessage();
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jeb1yig', 'template_91qxmw4', form.current, '4l8rmu9ZXGBrDefvB')
      .then((result) => {
        successMessage("message sent successfully")
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div>
      <div className="flex items-center justify-around">
        <form ref={form} onSubmit={sendEmail}>
          <div className="bg-slate-100 p-10 pb-14 rounded-lg w-full xl:mr-40">
            <h2 className="text-3xl font-bold">CONTACT US</h2>
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text">your name *</span>
              </label>
              <input
                type="text"
                name='to_name'
                placeholder="Write name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">your email *</span>
              </label>
              <input
                type="email"
                name='user_email'
                placeholder="Give email address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">your subject *</span>
              </label>
              <input
                type="subject"
                name='subject'
                placeholder="Write subject"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">your message *</span>
              </label>
              <textarea name="message" className="input input-bordered w-full" placeholder="Enter your message" id="" cols="30" rows="20"></textarea>
            </div>
            <div>
              <button className={`relative group overflow-hidden px-4 py-3 mt-8 w-full justify-center rounded-md flex space-x-2 bg-gradient-to-r text-white from-gray-600 via-gray-900 to-black hover:to-blue-900`}> Submit
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;