import React, {
  useState,
  ReactElement,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

import "./Button.scss";

interface IButtonProps {
  text?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: ReactElement;
  alt?: string;
  // type: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  type?: any;
  likes?: number | string;
  dislikes?: number | string;
}

const Button = ({
  text,
  disabled = false,
  onClick,
  className = "primary",
  icon,
  type,
  likes,
  dislikes,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn--${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span className="like-count">
        {likes} {dislikes}
      </span>
      {text && <span className="btn__text">{text}</span>}
    </button>
  );
};

export default Button;
