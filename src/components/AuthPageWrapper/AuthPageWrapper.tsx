import React, { type PropsWithChildren } from "react";
import Button from "../Button/Button";
import "./AuthPageWrapper.scss";

type AuthPageWrapper = PropsWithChildren<{
  title: string;
  theme: string;
}>;

const AuthPageWrapper = ({ children, title, theme }: AuthPageWrapper) => {
  return (
    <div className={`auth-page-wrapper auth-page-wrapper--${theme}`}>
      <a className="auth-page-wrapper__back-link" href="/">
        Back to home
      </a>
      <h1 className="auth-page-wrapper__title">{title}</h1>
      {children}
    </div>
  );
};

export default AuthPageWrapper;
