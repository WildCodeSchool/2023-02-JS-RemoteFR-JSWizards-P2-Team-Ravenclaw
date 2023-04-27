import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/contact">Contact</Link>
      <p>© House Ravenclaw.WCS-P2-2023-02-Remote</p>
    </footer>
  );
}
