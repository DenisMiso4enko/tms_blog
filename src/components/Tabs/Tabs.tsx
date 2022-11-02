import React from "react";
import "./Tabs.scss";

const Tabs = () => {
  return (
    <ul className="filter-tabs">
      <li className="filter-tabs__item active">All</li>
      <li className="filter-tabs__item">My favorites</li>
      <li className="filter-tabs__item">Popular</li>
    </ul>
  );
};

export default Tabs;
