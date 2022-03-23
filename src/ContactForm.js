import React, { useState } from "react";
import "./contact_style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "./firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const js_op = document.querySelector(".js_op");

  const handleSubmit = async (e) => {
    console.log("FAIZAN");
    e.preventDefault();
    const response = await fetch(
      "https://portfolio-contacts-76253-default-rtdb.firebaseio.com/userDataRedords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );

    if (response) {
      toast.success(" Thank You For Contacting !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Something Went Wrong");
    }

    // db.collection("contacts")
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //   .then(() => {

    //     toast.success(" Thank You For Contacting !", {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   })
    //   .catch((error) => {
    //     toast.error(`${error.message}`);
    //   });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="form-holder" id="contact">
        <form method="POST" className="container" onSubmit={handleSubmit}>
          <div className="contact__heading__container">
            <p className="contact-heading">CONTACT</p>
            <p className="about__underline__contact ">&nbsp;</p>
            <p id="hvqst">Have a question or want to work together?</p>
          </div>

          <div className="login">
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="subject">
            <input
              type="email"
              placeholder="Email"
              className="input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="msg">
            <textarea
              className="area"
              placeholder="Leave a Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="button-center">
            <button className="btn">Send Message</button>
          </div>

          <h4
            style={{ color: "#fff", textAlign: "center" }}
            className="js_op"
          ></h4>
        </form>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ContactForm;
