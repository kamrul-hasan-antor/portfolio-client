import React from "react";
import "./Contacts.css";
import emailjs from "emailjs-com";
const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wn6o2af",
        "template_tdtlh5z",
        e.target,
        "user_PU4soKeNvtmbWAKZaKuX8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contacts" className="main_contacts">
      <h1>contacts</h1>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="50"
                rows="10"
                placeholder="Your Messages"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                className="submit_button"
                type="submit"
                value="Send Mail"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
