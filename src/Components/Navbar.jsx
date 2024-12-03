import React, { useState } from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";
import DropdownMenu from "./Dropdown-menu";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" style={{ width: "300px" }} />
      </div>
      <ul className="navbar">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li
          className="menu"
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Solutions</button>
          {activeDropdown === "solutions" && (
            <DropdownMenu items={["Shopping Centers"]} />
          )}
        </li>
        <li
          className="menu"
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Products</button>
          {activeDropdown === "products" && (
            <DropdownMenu items={["PowerMax (480kW)", "PowerPulse (240kW)", "PowerSurge (160kW)", "PowerFlow (80kW)"]} />
          )}
        </li>
        <li>
        <a href="/Careers">Careers at REVIVE</a>
            </li>
            <li
          className="menu"
          onMouseEnter={() => handleMouseEnter("support")}
          onMouseLeave={handleMouseLeave}
        >
          <button>Support</button>
          {activeDropdown === "support" && (
            <DropdownMenu items={["FAQ EV Driver", "FAQ Site Host",]} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;