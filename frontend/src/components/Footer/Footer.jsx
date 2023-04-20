import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src="./src/assets/logo/Facebook.svg"
        className="logo-facebook"
        alt="logo facebook"
        width="50"
        height="50"
      />
      <img
        src="./src/assets/logo/Twitter.svg"
        className="logo-twitter"
        alt="logo twitter"
        width="50"
        height="50"
      />
      <img
        src="./src/assets/logo/YouTube.svg"
        className="logo-youtube"
        alt="logo youtube"
        width="50"
        height="50"
      />
      <div>
        <p>About Us</p>
        <p>Terms of Us</p>
        <p>Privacy policy</p>
      </div>
    </footer>
  );
}
