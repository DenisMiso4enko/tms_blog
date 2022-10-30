import { ButtonProps } from "../../intarfaces/button-interface";

import "./_button.scss";

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  icon,
  className,
  handelClick,
}) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={handelClick}
      style={{ color }}
    >
      {icon}

      {text}
    </button>
  );
};

export default Button;
