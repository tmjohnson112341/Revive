import React from "react";
import "./Dropdown-menu.css";

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.className}>
            {item.image && <img src={item.image} alt={item.text} />}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
