import React from "react";
import Button from "../Button/Button";
import "./ConfimRegistration.scss";

const ConfimRegistration = () => {
  return (
    <div className="confim-wrapper">
      <p className="confim__text">
        Please active your accaunt with the activation <br />
        link in the email <span>exampleemail@mail.com</span> <br />
        Please check your email
      </p>
      <Button text="Go to home" className="sign" />
    </div>
  );
};

export default ConfimRegistration;
