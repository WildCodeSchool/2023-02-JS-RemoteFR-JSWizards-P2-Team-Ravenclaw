import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="/assets/logo/Facebook.png"
          className="logo-facebook"
          alt="logo facebook"
          width="50"
          height="50"
        />
        <img
          src="/assets/logo/Twitter.png"
          className="logo-twitter"
          alt="logo twitter"
          width="50"
          height="50"
        />
        <img
          src="/assets/logo/YouTube.png"
          className="logo-youtube"
          alt="logo youtube"
          width="50"
          height="50"
        />
      </div>

      <p>© House Ravenclaw.WCS-P2-2023-02-Remote</p>
    </footer>
  );
}
