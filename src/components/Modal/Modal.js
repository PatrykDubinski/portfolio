import React from "react";
import Background from "./Background/Background";
import "./Modal.css";

const Modal = ({ setModal }) => {
  return (
    <Background closeModal={setModal}>
      <div className="modal">
        <h2>Your email has been sent!</h2>
        <p>Thanks for contacting me! I will respond as soon as possible. </p>
      </div>
    </Background>
  );
};

export default Modal;
