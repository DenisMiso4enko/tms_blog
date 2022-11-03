import React from "react";
import Button from "../Button/Button";
import "./Pagination.scss";
import { ReactComponent as ArrowLeftIcon } from "../../assests/Icon/Icon/Arrow.svg";
import { ReactComponent as ArrowRightIcon } from "../../assests/Icon/Icon/Arrow-right.svg";
import { ReactComponent as DotsIcon } from "../../assests/Icon/Icon/Menu/More/More-Horizontal.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__left">
        <Button className="pagination" text="Prev" icon={<ArrowLeftIcon />} />
      </div>
      <div className="pagination__center-btns">
        <Button className="pagination" text="1" />
        <Button className="pagination" text="2" />
        <Button className="pagination" text="3" />
        <Button className="pagination" icon={<DotsIcon />} />
        <Button className="pagination" text="6" />
      </div>
      <div className="pagination__right">
        <Button
          className="pagination-rev"
          text="Next"
          icon={<ArrowRightIcon />}
        />
      </div>
    </div>
  );
};

export default Pagination;
