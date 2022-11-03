import React, { useState } from "react";
import Button from "../Button/Button";
import "./Card.scss";
//@ts-ignore-start
import image from "../../../src/assests/img/space.jpg";
//@ts-ignore-end

interface ICard {
  className: string;
  variant: string;
  like?: any;
  dislike?: any;
  bookmark?: any;
  dots?: any;
}

const Card = ({ className, variant, like, dislike, bookmark, dots }: ICard) => {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const handelLikesCount = () => {
    setLikes(likes + 1);
  };
  const handelDisLikesCount = () => {
    setDisLikes(disLikes + 1);
  };
  return (
    <div className={`card ${className} card--${variant}`}>
      <div className="card__top">
        <div className="card__info">
          <p className="card__date">April 22, 2009</p>
          <div className="card__title">
            <a href="#">
              Astronauts prep for new solar arrays on nearly seven-hour
              spacewalk
            </a>
          </div>
          <p className="card__desc">
            Astronauts Kayla Barron and Raja Chari floated out of the
            International Space Station airlock for a spacewalk Tuesday,
            installing brackets and struts to support new solar arrays to
            upgrade the research lab’s power system on the same day that
            crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record
            for a single spaceflight.
          </p>
        </div>
        <div className="card__image-wrapper">
          <img className="card__image" src={image} alt="img" />
        </div>
      </div>

      <div className="card__footer">
        <div className="card__icons-left">
          <Button
            onClick={handelLikesCount}
            className="card"
            icon={like}
            likes={likes === 0 ? "" : likes}
          />
          <Button
            onClick={handelDisLikesCount}
            className="card"
            icon={dislike}
            dislikes={disLikes === 0 ? "" : disLikes}
          />
        </div>
        <div className="card__icons-right">
          <Button className="card" icon={bookmark} />
          <Button className="card" icon={dots} />
        </div>
      </div>
    </div>
  );
};

export default Card;
