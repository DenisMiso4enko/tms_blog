import React, { useState } from "react";

import "./App.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { ReactComponent as DislikeIcon } from "../src/assests/Icon/Thumbs/Down.svg";
import { ReactComponent as LikeIcon } from "../src//assests/Icon/Thumbs/Icon-Thumbs-Up.svg";
import { ReactComponent as BookmarkIcon } from "../src/assests/Icon/Controls/Icon-Bookmark.svg";
import { ReactComponent as DotsIcon } from "../src/assests/Icon/Icon/Menu/More/More-Horizontal.svg";
import { ReactComponent as BurgerIcon } from "../src/assests/Icon/Icon/Menu/Burger.svg";
import { ReactComponent as SearchIcon } from "../src/assests/Icon/search.svg";

import { ReactComponent as AccauntIcon } from "../src/assests/Icon/acc.svg";
import Card from "../src/components/Card/Card";
import AuthPageWrapper from "./components/AuthPageWrapper/AuthPageWrapper";
import Header from "./components/Header/Header";
import { log } from "console";
import Footer from "./components/Footer/Footer";
import FormAuth from "./components/Forms/FormAuth";
import FormReg from "./components/Forms/FormReg";
import ConfimRegistration from "./components/ConfimRegistration/ConfimRegistration";
import Tabs from "./components/Tabs/Tabs";
import MainBlog from "./components/MainBlog/MainBlog";

function App() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");

  const handelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handelEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handelPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handelConfimPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfimPassword(e.target.value);
  };

  const handelSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sumbit!");
    if (email.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    if (password.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    if (userName.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    if (confimPassword.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };

  return (
    <div className="App">
      <Header />
      {/* <AuthPageWrapper title={"Sign up"} theme={""}>
        <FormAuth
          error={error}
          handelEmailChange={handelEmailChange}
          handelPasswordChange={handelPasswordChange}
          handelSumbit={handelSumbit}
          valueEmail={email}
          valuePassword={password}
        />
      </AuthPageWrapper> */}
      {/* <AuthPageWrapper title={"Sign in"} theme={""}>
        <FormReg
          handelSumbit={handelSumbit}
          handelEmailChange={handelEmailChange}
          handelPasswordChange={handelPasswordChange}
          handelNameChange={handelNameChange}
          valueEmail={email}
          valuePassword={password}
          handelConfimPasswordChange={handelConfimPasswordChange}
          valueUserName={userName}
          valueConfimPassword={confimPassword}
          error={error}
        />
      </AuthPageWrapper> */}
      {/* <AuthPageWrapper title={"Registration Confimatios"} theme={""}>
        <ConfimRegistration />
      </AuthPageWrapper> */}
      <AuthPageWrapper title={"Blog"} theme={""}>
        <MainBlog />
      </AuthPageWrapper>
      {/* <div className="btns">
        <Button
          text="Primary"
          className="primary"
          onClick={handleButtonClick}
        />
        <Button
          text="Primary"
          className="primary"
          onClick={handleButtonClick}
          disabled
        />
        <Button
          text="Secondary"
          className="secondary"
          onClick={handleButtonClick}
        />
        <Button
          text="Secondary2"
          className="secondary2"
          onClick={handleButtonClick}
        />
        <Button
          text="Button with icon"
          className="with-icon"
          icon={<BookmarkIcon />}
          onClick={handleButtonClick}
        />
        <Button
          icon={<DislikeIcon />}
          className="with-icon2"
          onClick={handleButtonClick}
        />
        <Button
          icon={<DotsIcon />}
          className="with-icon"
          onClick={handleButtonClick}
        />
        <Button
          icon={<AccauntIcon />}
          className="with-icon"
          onClick={handleButtonClick}
        />
        <Button
          icon={<SearchIcon />}
          className="with-icon"
          onClick={handleButtonClick}
        />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
