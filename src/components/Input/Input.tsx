import React from "react";
import "./Input.scss";

interface IInputProps {
  type?: React.HTMLInputTypeAttribute;
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({
  title,
  type,
  error,
  placeholder,
  disabled,
  errorMessage,
  onChange,
  value,
}: IInputProps) => {
  return (
    <div className="input">
      {title && (
        <label className="input__label" htmlFor={type}>
          {title}
        </label>
      )}
      <input
        id={type}
        className={`input__input ${error ? "input__input--error" : null}`}
        type={type ?? "text"}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <span className="input__error">{error && errorMessage}</span>
    </div>
  );
};

export default Input;
