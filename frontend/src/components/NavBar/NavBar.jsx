import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <img
        src="./src/assets/logo/Logo_AlloAnime.png"
        alt="logo AlloAnime"
        className="logo-desktop"
        width="350"
        height="60"
      />
      <img
        src="./src/assets/logo/logo-AlloAnime-mobile.svg"
        alt="logo AlloAnime"
        className="logo-mobile"
      />
      <label>
        <input type="text" placeholder="" name="seach" />
      </label>
      <ul>
        <li>Films</li>
        <li>Series</li>
        <li>Les plus regardes</li>
      </ul>
    </nav>
  );
}
