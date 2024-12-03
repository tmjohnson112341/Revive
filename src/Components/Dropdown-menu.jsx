import React from "react";
import "./Dropdown-menu.css";

const DropdownMenu = ({ items }) => {
  return (
    <div className="dropdown-menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;