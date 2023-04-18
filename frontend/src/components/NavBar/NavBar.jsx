import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <img
        src="./src/assets/logo/Logo_AlloAnime.png"
        alt="logo AlloAnime"
        className="logo"
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
