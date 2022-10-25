import React from "react";
import { ButtonProps } from "../../intarfaces/button-interface";

const ButtonPrimary: React.FC<ButtonProps> = ({ name, logGritting }) => {
  return (
    <button className="btn-primary" onClick={() => logGritting()}>
      {name}
    </button>
  );
};

export default ButtonPrimary;
