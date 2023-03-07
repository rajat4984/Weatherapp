import React from "react";
// import { BiSearchAlt } from "react-icons/bi";
import { FaTemperatureHigh } from "react-icons/fa";
import "../scss/components/navbar.scss";
import MobileNavigation from "./Navbarcomponents.js/MobileNavigation";
import Navigation from "./Navbarcomponents.js/Navigation";

function Navbar({ brandName }) {
  return (
    <div>
      <nav className="navbar">
        <div className="brand-name">
          <p>
            {brandName} <FaTemperatureHigh />
          </p>
        </div>
        <div className="nav-links">
          <Navigation/>
          <MobileNavigation/>
        </div>
      </nav>
      <hr className="default-hr" />
    </div>
  );
}

export default Navbar;
