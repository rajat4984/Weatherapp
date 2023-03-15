import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "../../scss/components/navbar.scss";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

function NavLinks({ isMobile, closeMobileMenu }) {
  const { handleUnit, handleTime } = useGlobalContext();

  const animationFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className="nav-links">
      <motion.div
        initial={animationFrom}
        animate={animateTo}
        className="search-bar"
      >
        <input type="text" placeholder="eg:Delhi" />
        <button onClick={() => isMobile && closeMobileMenu()}>
          <BiSearchAlt />
        </button>
      </motion.div>
      <motion.p
        initial={animationFrom}
        animate={animateTo}
        onClick={() => {
          isMobile && closeMobileMenu();
          handleTime();
        }}
      >
        Change time
      </motion.p>
      <motion.p
        initial={animationFrom}
        animate={animateTo}
        onClick={() => {
          isMobile && closeMobileMenu();
          handleUnit();
        }}
      >
        Change unit
      </motion.p>
    </div>
  );
}

export default NavLinks;
