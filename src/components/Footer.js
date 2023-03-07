import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "../scss/components/footer.scss"

function Footer() {
  return (
    <div className="footer">
      <p>Made by Rajat&nbsp;<a href="https://github.com/rajat4984" target="_blank"><AiFillGithub/></a></p>
    </div>
  );
}

export default Footer;
