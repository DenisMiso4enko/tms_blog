import React from "react";
import { ButtonProps } from "../../intarfaces/button-interface";

const ButtonSecondary: React.FC<ButtonProps> = ({ name, logGritting }) => {
  return (
    <button className="btn-secondary" onClick={() => logGritting()}>
      {name}
    </button>
  );
};

export default ButtonSecondary;
