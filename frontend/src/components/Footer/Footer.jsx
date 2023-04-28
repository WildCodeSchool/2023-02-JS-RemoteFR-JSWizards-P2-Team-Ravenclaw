import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src="./assets/logo/Facebook.svg"
        className="logo-facebook"
        alt="logo facebook"
        width="50"
        height="50"
      />
      <img
        src="./assets/logo/Twitter.svg"
        className="logo-twitter"
        alt="logo twitter"
        width="50"
        height="50"
      />
      <img
        src="./assets/logo/YouTube.svg"
        className="logo-youtube"
        alt="logo youtube"
        width="50"
        height="50"
      />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input id="message" type="message" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <p>© House Ravenclaw.WCS-P2-2023-02-Remote</p>
    </footer>
  );
}
