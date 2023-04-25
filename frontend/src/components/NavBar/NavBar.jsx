import { useState } from "react";
// import React from "react";
import "./NavBar.scss";

export default function NavBar({ recherche, setRecherche }) {
  const handleClickBurger = () => {
    const burger = document.getElementById("burger");
    const ul = document.querySelector("ul");
    burger.classList.toggle("open");
    ul.classList.toggle("open");
  };

  function onChange(e) {
    // console.log(e.target.value); /** Cible dans l'input le target puis la valeur */
    setRecherche(e.target.value);
    console.log(recherche);
  }

  function onSearch(e) {
    e.preventDefault(); /** Evite le rechargement de la page */

    console.log(recherche);
  }

  return (
    <header>
      <img
        src="./src/assets/logo/Logo-AlloAnime-desktop.svg"
        alt="logo AlloAnime"
        width="350"
        height="60"
        className="logo-desktop"
      />
      <img
        src="./src/assets/logo/Logo-AlloAnime-mobile.png"
        alt="logo AlloAnime"
        width="40"
        height="30"
        className="logo-mobile"
      />
      <form onSubmit={onSearch}>
        <label>
          <input
            type="text"
            placeholder=""
            name="seach"
            onChange={onChange}
            value={recherche}
          />
        </label>
      </form>
      <nav>
        <button type="button" id="link" onClick={handleClickBurger}>
          <span id="burger" />
        </button>
        <ul>
          <li>Films</li>
          <li>Series</li>
          <li>Les plus regardes</li>
        </ul>
      </nav>
    </header>
  );
}
