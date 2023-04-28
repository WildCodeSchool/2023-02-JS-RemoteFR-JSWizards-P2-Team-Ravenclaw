import PropTypes from "prop-types";
import AnimeCardCategorie from "./AnimeCardCategorie";

function Categorie({ animes, titreCategorie }) {
  return (
    <div className="bloc-selection">
      <hr size="10" width="100%" align="center" color="#8D99AE" />
      <h2>{titreCategorie}</h2>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
      <div className="dad-anime-card">
        {animes.map((anime) => (
          <AnimeCardCategorie key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

Categorie.propTypes = {
  animes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  titreCategorie: PropTypes.string.isRequired,
};

export default Categorie;
