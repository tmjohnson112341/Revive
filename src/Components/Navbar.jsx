import React, { useState } from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownData = {
    Home: [], // Empty dropdown for Home
    Products: [
      { text: "PowerMax (480kW)", image: require("../Assets/PowerMax.png") },
      { text: "PowerPulse (240kW)", image: require("../Assets/PowerPulse.png") },
      { text: "PowerSurge (160kW)", image: require("../Assets/PowerSurge.png") },
      { text: "PowerFlow (80kW)", image: require("../Assets/PowerFlow.png") },
    ],
    Solutions: [{ text: "Shopping Centers" }],
    About: [
      { text: "Our Story" },
      { text: "Team" },
      { text: "Careers" },
    ],
    Support: [
      { text: "FAQ EV Driver" },
      { text: "FAQ Site Host" },
    ],
  };

  const handleMouseEnterNav = (menu) => {
    setActiveDropdown(menu); // Show the hovered dropdown
  };

  const handleMouseLeaveHeader = () => {
    setActiveDropdown(null); // Collapse the dropdown when leaving header
  };

  return (
    <div
      className="header-wrapper"
      onMouseLeave={handleMouseLeaveHeader} // Close dropdown when leaving header
    >
      {/* Header */}
      <div className="header">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="navbar">
          <ul>
            {Object.keys(dropdownData).map((menu) => (
              <li
                key={menu}
                className="dropdown"
                onMouseEnter={() => handleMouseEnterNav(menu)}
              >
                <a href="#">{menu}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="button">
          <button>Speak to an Expert</button>
        </div>
      </div>

      {/* Dropdown */}
      <div
        className={`dropdown-container ${activeDropdown ? "active" : ""}`}
        style={{ maxHeight: activeDropdown ? "500px" : "0px" }} // Dynamically set height
      >
        {activeDropdown && dropdownData[activeDropdown].length > 0 && (
          <ul>
            {dropdownData[activeDropdown].map((item, index) => (
              <li key={index}>
                {item.image && <img src={item.image} alt={item.text} />}
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
