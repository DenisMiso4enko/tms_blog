import React from "react";
import Card from "../Card/Card";
import Tabs from "../Tabs/Tabs";
import "./MainBlog.scss";
import { ReactComponent as DislikeIcon } from "../../assests/Icon/Thumbs/Down.svg";
import { ReactComponent as LikeIcon } from "../../assests/Icon/Thumbs/Icon-Thumbs-Up.svg";
import { ReactComponent as BookmarkIcon } from "../../assests/Icon/Controls/Icon-Bookmark.svg";
import { ReactComponent as DotsIcon } from "../../assests/Icon/Icon/Menu/More/More-Horizontal.svg";
import Pagination from "../Pagination/Pagination";

const MainBlog = () => {
  
  return (
    <main className="blog">
      <Tabs />
      <div className="blog__content">
        <div className="blog__left">
          <Card
            className="card"
            variant="md"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="md"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="md"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="md"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="md"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="md"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
        </div>
        <div className="blog__right">
          <Card
            className="card"
            variant="sm"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="sm"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="sm"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="sm"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
          <Card
            className="card"
            variant="sm"
            like={<LikeIcon />}
            dislike={<DislikeIcon />}
            bookmark={<BookmarkIcon />}
            dots={<DotsIcon />}
          />
        </div>
      </div>
      <Pagination />
    </main>
  );
};

export default MainBlog;

{
  /* <Card
  className="card"
  variant="xl"
  like={<LikeIcon />}
  dislike={<DislikeIcon />}
  bookmark={<BookmarkIcon />}
  dots={<DotsIcon />}
/>; */
}
