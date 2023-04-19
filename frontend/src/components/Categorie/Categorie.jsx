import PropTypes from "prop-types";
import AnimeCardCategorie from "./AnimeCardCategorie";

function Categorie({ animes }) {
  return (
    <div className="bloc-selection">
      <h1> VOTRE SELECTION </h1>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
      <div className="anime-card">
        {animes.map((anime) => (
          <AnimeCardCategorie key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
    </div>
  );
}

Categorie.propTypes = {
  animes: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
};

export default Categorie;
