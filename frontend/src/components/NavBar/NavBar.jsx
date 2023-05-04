import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  const [recherche, setRecherche] = useState("");

  const handleClickBurger = () => {
    const burger = document.getElementById("burger");
    const ul = document.querySelector("ul");
    burger.classList.toggle("open");
    ul.classList.toggle("open");
  };

  function onChange(e) {
    setRecherche(e.target.value);
  }

  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault(); /** Evite le rechargement de la page */
    navigate(`/search/${recherche}`);
  }

  return (
    <header>
      <a href="/">
        <img
          src="/assets/logo/logo-AlloAnime-desktop.svg"
          alt="logo AlloAnime"
          width="350"
          height="60"
          className="logo-desktop"
        />
        <img
          src="/assets/logo/logo-AlloAnime-mobile.png"
          alt="logo AlloAnime"
          width="40"
          height="30"
          className="logo-mobile"
        />
      </a>
      <form onSubmit={onSearch}>
        <label className="searchbar">
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
        <ul className="loupe">
          <li className="deroulant">
            Categorie
            <ul className="sous">
              <li>
                <Link to="/aventure">Adventure</Link>
              </li>
              <li>
                <Link to="/action">Action</Link>
              </li>
              <li>
                <Link to="/fantasy">Fantasy</Link>
              </li>
              <li>
                <Link to="/gourmet">Gourmet</Link>
              </li>
              <li>
                <Link to="/seinen">Seinen</Link>
              </li>
              <li>
                <Link to="/shonen">Shonen</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/oav">OAV</Link>
          </li>
          <li>
            <Link to="/favoris">Les mieux notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
