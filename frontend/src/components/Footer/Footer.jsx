import React from "react";
import "./Footer.scss";
import logoFacebook from "../../assets/logo/Facebook.svg";
import logoTwitter from "../../assets/logo/Twitter.svg";
import logoYoutube from "../../assets/logo/YouTube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={logoFacebook}
        className="logo-facebook"
        alt="logo facebook"
        width="50"
        height="50"
      />
      <img
        src={logoTwitter}
        className="logo-twitter"
        alt="logo twitter"
        width="50"
        height="50"
      />
      <img
        src={logoYoutube}
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
