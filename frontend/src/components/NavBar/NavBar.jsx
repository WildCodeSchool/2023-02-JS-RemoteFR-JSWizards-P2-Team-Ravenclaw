import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
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
    // console.log(recherche);
  }

  const navigate = useNavigate();
  function onSearch(e) {
    e.preventDefault(); /** Evite le rechargement de la page */
    navigate("/search");
    // console.log(recherche);
  }

  return (
    <header>
      <a href="/">
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
      </a>
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

NavBar.propTypes = {
  recherche: PropTypes.string.isRequired,
  setRecherche: PropTypes.func.isRequired,
};
