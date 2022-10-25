import React from "react";
import { ButtonProps } from "../../intarfaces/button-interface";

const ButtonSecondary2: React.FC<ButtonProps> = ({ name, logGritting }) => {
  return (
    <button className="btn-secondary2" onClick={() => logGritting()}>
      {name}
    </button>
  );
};

export default ButtonSecondary2;
