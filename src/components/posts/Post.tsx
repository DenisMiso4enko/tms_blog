import { IPost } from "../../intarfaces/post-interface";
import "./_post.scss";
import { ReactComponent as IconDown } from "../../assests/Icon/Thumbs/Down.svg";
import { ReactComponent as IconUp } from "../../assests/Icon/Thumbs/Icon-Thumbs-Up.svg";
import { ReactComponent as IconDots } from "../../assests/Icon/Icon/Menu/More/More-Horizontal.svg";
import { ReactComponent as IconBookMark } from "../../assests/Icon/Controls/Icon-Bookmark.svg";

import Button from "../Button/Button";

// : React.FC<IPost[]>

const Post: React.FC<IPost> = (props) => {
  const { id, title, image, text, author, date } = props;
  return (
    <div className={props.className} id="{id}">
      <div className="post__content">
        <div className="post__info">
          <span className="post__date">{date}</span>
          <a className="post__title" href="#">
            {title}
          </a>
          <p className="post__text">{text}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="image" />
        </div>
      </div>
      <div className="post__icons">
        <div className="btns-like">
          <Button className="btn" icon={<IconUp />} />
          <Button className="btn" icon={<IconDown />} />
        </div>
        <div className="btns-more">
          <Button className="btn " icon={<IconBookMark />} />
          <Button className="btn" icon={<IconDots />} />
        </div>
      </div>
    </div>
  );
};

export default Post;
