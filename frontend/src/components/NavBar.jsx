import React from "react";
import "./NavBar.scss";
import logo from "../assets/logo/Logo_AlloAnime.png";

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo AlloAnime" width="350" height="60" />
      <input type="text" placeholder="Search ..." name="seach" />
      <ul>
        <li>Films</li>
        <li>Series</li>
        <li>Les plus regardes</li>
      </ul>
    </nav>
  );
}
