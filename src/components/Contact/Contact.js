import React from "react";
import "./Contact.css";

import { IoMdMail, FaMapMarkerAlt } from "react-icons/all";

const Contact = () => {
  return (
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
        <form>
          <div className="top__form">
            <div className="input-wrapper">
              <input type="text" />
              <span className="placeholder">Your Full Name</span>
            </div>
            <div className="input-wrapper">
              <input type="email" />
              <span className="placeholder">Your email</span>
            </div>
          </div>
          <div className="subject-wrapper">
            <input type="text" />
            <span className="placeholder">Subject</span>
          </div>
          <div className="textarea-wrapper">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
