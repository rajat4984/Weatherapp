import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "../../scss/components/navbar.scss";
import { motion } from "framer-motion";

function NavLinks({ isMobile, closeMobileMenu }) {
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
        onClick={() => isMobile && closeMobileMenu()}
      >
        new link
      </motion.p>
      <motion.p
        initial={animationFrom}
        animate={animateTo}
        onClick={() => isMobile && closeMobileMenu()}
      >
        new link
      </motion.p>
      <motion.p
        initial={animationFrom}
        animate={animateTo}
        onClick={() => isMobile && closeMobileMenu()}
      >
        new link
      </motion.p>
    </div>
  );
}

export default NavLinks;
