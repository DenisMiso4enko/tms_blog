import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Forms.scss";

interface IFormAuth{
  handelSumbit: (e: React.FormEvent) => void;
  handelEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handelPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueEmail: string;
  valuePassword: string;
  error: boolean;
}

const FormAuth = ({
  error,
  handelEmailChange,
  handelPasswordChange,
  handelSumbit,
  valueEmail,
  valuePassword,
}: IFormAuth) => {
  return (
    <div className="form-wrapper">
      <form className="form-sign" onSubmit={handelSumbit}>
        <div className="form-sign__inputs">
          <Input
            type="email"
            title="Email"
            placeholder="Email"
            error={error}
            errorMessage="Заполните поле"
            onChange={handelEmailChange}
            value={valueEmail}
          />
          <Input
            type="password"
            title="Password"
            error={error}
            placeholder="Password"
            errorMessage="Заполните поле"
            onChange={handelPasswordChange}
            value={valuePassword}
          />
        </div>

        <Button text="Sign In" className="sign" type="submit" />
        <p className="form-sign__info">
          Don’t have an account?<a href="#"> Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default FormAuth;
