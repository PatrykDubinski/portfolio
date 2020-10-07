import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import "./Contact.css";
import { IoMdMail, FaMapMarkerAlt } from "react-icons/all";
import Modal from "../Modal/Modal";
import { CSSTransition } from "react-transition-group";

const Contact = () => {
  init("user_REpZHfesP9fKqwqJnrJBg");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(true);

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio_contact",
        "template_0erz4vi",
        e.target,
        "user_REpZHfesP9fKqwqJnrJBg"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );

    setNameInput("");
    setEmailInput("");
    setSubjectInput("");
    setMessage("");
    setShowModal(true);
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <div className="contact-boxes">
          <div className="contact-box">
            <IoMdMail />
            <p>dubinskipatryk99@gmail.com</p>
          </div>
          <div className="contact-box">
            <FaMapMarkerAlt />
            <p>Polska, Kołobrzeg</p>
          </div>
        </div>
        <article className="form__wrapper">
          <form onSubmit={(e) => sendMessage(e)}>
            <div className="top__form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="from_name"
                  value={nameInput}
                  required
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <span
                  className={`placeholder ${
                    nameInput !== "" ? "hidden" : null
                  }`}
                >
                  Your Full Name
                </span>
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="from_email"
                  value={emailInput}
                  required
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <span
                  className={`placeholder ${
                    emailInput !== "" ? "hidden" : null
                  }`}
                >
                  Your email
                </span>
              </div>
            </div>
            <div className="subject-wrapper">
              <input
                type="text"
                name="from_subject"
                value={subjectInput}
                required
                onChange={(e) => setSubjectInput(e.target.value)}
              />
              <span
                className={`placeholder ${
                  subjectInput !== "" ? "hidden" : null
                }`}
              >
                Subject
              </span>
            </div>
            <div className="textarea-wrapper">
              <textarea
                placeholder="Message"
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Send message</button>
          </form>
        </article>
      </section>
      <CSSTransition
        in={showModal}
        unmountOnExit
        timeout={500}
        classNames="my-modal"
      >
        <Modal setModal={setShowModal} />
      </CSSTransition>
    </>
  );
};

export default Contact;
