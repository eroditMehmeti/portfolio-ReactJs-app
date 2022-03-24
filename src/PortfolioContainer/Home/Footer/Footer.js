import React from "react";
import "./Footer.css";
import Logo from "../../../assets/Home/shape-bg.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={Logo} alt="no internet" />
      </div>
    </div>
  );
}

export default Footer;
