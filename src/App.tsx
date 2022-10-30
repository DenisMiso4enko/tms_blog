import React, { useState } from "react";

import "./App.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import { ReactComponent as IconDown } from "../src/assests/Icon/Thumbs/Down.svg";
import { ReactComponent as IconUp } from "../src//assests/Icon/Thumbs/Icon-Thumbs-Up.svg";
import { ReactComponent as IconBookMark } from "../src/assests/Icon/Controls/Icon-Bookmark.svg";

import Post from "./components/posts/Post";
import "../src/assests/img/post-img.jpg";

function App() {
  const [values, setValues] = useState<any>({
    username: "",
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [posts, setPosts] = useState([
    {
      id: 0,
      image: "../src/assests/img/post-img.jpg",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      date: "April 20, 2021",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: "",
    },
    {
      id: 1,
      image: "../src/assests/img/post-img.jpg",
      title: "Astronauts prepare for new solar arrays",
      date: "April 20, 2021",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.",
      author: "",
    },
    {
      id: 2,
      image: "../src/assests/img/post-img.jpg",
      title: "Astronauts prepare for new solar arrays",
      date: "April 20, 2021",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.",
      author: "",
    },
    {
      id: 3,
      image: "../src/assests/img/post-img.jpg",
      title: "Astronauts prepare for new solar arrays",
      date: "April 20, 2021",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.",
      author: "",
    },
  ]);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username должен содержать от 3-16 символов",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      label: "Fullname",
      errorMessage: "Fullname должен содержать от 3-16 символов",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "введите валидный email",
      pattern:
        "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "tel",
      placeholder: "+ 375 (29) 837 89 99",
      label: "Phone",
      errorMessage: "введите телефон в формате + 375 (29) 837 89 99",
      pattern:
        "^(8029[2578]|80336|+37529[2578]|+375336|0037529[2578]|00375336d{6})$",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "пароль должен быть от 6-15 символов",
      pattern: "^[a-zA-Z0-9]{6,15}$",
      required: true,
    },
  ];

  const handelOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const handelClick = (): void => {
    console.log("click");
  };
  return (
    <div className="App">
      {/* <form onSubmit={handelSubmit}>
        {inputs.map((input) => (
          <Input
            handelOnChange={handelOnChange}
            key={input.id}
            {...input}
            value={values[input.name]}
          />
        ))}
        <Button className="btn-primary" text="Submit" color="white" />
      </form>
      <div className="btns">
        <Button
          className="btn-primary"
          text="Primary"
          color="white"
          handelClick={handelClick}
        />
        <Button
          className="btn-secondary2"
          text="Secondary"
          color="$secondary"
          handelClick={handelClick}
        />
        <Button
          className="btn-secondary"
          text="Secondary 2"
          color="red"
          handelClick={handelClick}
        />
        <Button
          className="btn-bookmark"
          text="Button with icon"
          color="color: $secondary"
          icon={<IconBookMark />}
          handelClick={handelClick}
        />

        <Button
          className="btn-like"
          icon={<IconUp />}
          color="white"
          handelClick={handelClick}
        />
        <Button
          className="btn-dislike"
          icon={<IconDown />}
          color="white"
          handelClick={handelClick}
        />
      </div> */}
      <div className="posts">
        {posts.map((post) => (
          <Post className="post" key={post.id} {...post} />
        ))}
      </div>
      <div className="posts-2">
        {posts.map((post) => (
          <Post className="post post-md" key={post.id} {...post} />
        ))}
      </div>
      <div className="post-aside">
        {posts.map((post) => (
          <Post className="post post-sm" key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;
