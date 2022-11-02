import React from "react";
import Button from "../Button/Button";
import "./Header.scss";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <Button
          type="button"
          className="burger"
          icon={<IoReorderThreeOutline />}
        />
      </div>
      <div className="header__btns">
        <Button type="button" className="search" icon={<IoSearch />} />
        <Button type="button" className="person" icon={<IoPersonOutline />} />
      </div>
    </header>
  );
};

export default Header;
