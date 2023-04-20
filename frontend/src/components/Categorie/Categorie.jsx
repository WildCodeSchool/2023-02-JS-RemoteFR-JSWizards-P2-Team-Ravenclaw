import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AnimeCardCategorie from "./AnimeCardCategorie";

function Categorie({ animes, titreCategorie }) {
  const [animeCategorie, setAnimeCategorie] = useState([]);

  useEffect(() => {
    const animeFiltered = animes.filter((anime) => {
      for (const genre of anime.genres) {
        if (genre.name === titreCategorie) {
          return anime;
        }
      }
      return "";
    });
    setAnimeCategorie([...animeFiltered]);
  }, []);

  return (
    <div className="bloc-selection">
      <h2>{titreCategorie}</h2>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
      <div className="dad-anime-card">
        {animeCategorie.map((anime) => (
          <AnimeCardCategorie anime={anime} />
        ))}
      </div>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
    </div>
  );
}

Categorie.propTypes = {
  animes: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  titreCategorie: PropTypes.string.isRequired,
};

export default Categorie;
