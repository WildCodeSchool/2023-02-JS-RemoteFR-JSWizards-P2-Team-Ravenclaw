import React from "react";
import "./Footer.scss";
import logo1 from "../../assets/logo/Facebook.svg";
import logo2 from "../../assets/logo/Twitter.svg";
import logo3 from "../../assets/logo/YouTube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo1} alt="logo facebook" width="50" height="50" />
      <img src={logo2} alt="logo twitter" width="50" height="50" />
      <img src={logo3} alt="logo youtube" width="50" height="50" />
      <div>
        <p>About Us</p>
        <p>Terms of Us</p>
        <p>Privacy policy</p>
      </div>
    </footer>
  );
}
