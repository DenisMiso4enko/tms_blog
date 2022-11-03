import { error } from "console";
import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Forms.scss";

interface IFormReg {
  handelSumbit: (e: React.FormEvent) => void;
  handelEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handelNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handelConfimPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handelPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueEmail: string;
  valuePassword: string;
  valueUserName: string;
  valueConfimPassword: string;
  error: boolean;
}

const FormReg = ({
  handelSumbit,
  handelEmailChange,
  handelPasswordChange,
  handelNameChange,
  valueEmail,
  valuePassword,
  handelConfimPasswordChange,
  valueUserName,
  valueConfimPassword,
  error,
}: IFormReg) => {
  return (
    <div className="form-wrapper">
      <form className="form-sign" onSubmit={handelSumbit}>
        <div className="form-sign__inputs">
          <Input
            type="text"
            title="Name"
            placeholder="Your name"
            error={error}
            errorMessage="Заполните поле"
            onChange={handelNameChange}
            value={valueUserName}
          />
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
            placeholder="Password"
            error={error}
            errorMessage="Заполните поле"
            onChange={handelPasswordChange}
            value={valuePassword}
          />
          <Input
            type="password"
            title="Password"
            placeholder="Confim password"
            error={error}
            errorMessage="Заполните поле"
            onChange={handelConfimPasswordChange}
            value={valueConfimPassword}
          />
        </div>

        <Button text="Sign In" className="sign" type="submit" />
        <p className="form-sign__info">
          Already have an account?<a href="#"> Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default FormReg;
