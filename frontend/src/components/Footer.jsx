import React from "react";
import "./Footer.scss";
import logo1 from "../assets/logo/facebook.jpg";
import logo2 from "../assets/logo/twitter.png";
import logo3 from "../assets/logo/youtube.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo1} alt="logo facebook" width="50" height="50" />
      <img src={logo2} alt="logo twitter" width="50" height="50" />
      <img src={logo3} alt="logo youtube" width="50" height="50" />
    </footer>
  );
}
