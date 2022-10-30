import React, { useState } from "react";
import "./_input.scss";

const Input = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, handelOnChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = () => [setFocused(true)];
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handelOnChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
