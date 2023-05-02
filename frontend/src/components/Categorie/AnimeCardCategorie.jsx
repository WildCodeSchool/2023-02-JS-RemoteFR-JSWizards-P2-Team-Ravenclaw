import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./VotreSelection.scss";

function AnimeCardCategorie({ anime }) {
  const animeId = anime.mal_id;
  return (
    <div className="anime-card">
      <Link to={`/anime/${animeId}`}>
        <img
          className="image-selection"
          src={anime.images.jpg.image_url}
          alt={anime.title}
        />
        <h3 className="overflow">{anime.title}</h3>
      </Link>
    </div>
  );
}

AnimeCardCategorie.propTypes = {
  anime: PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default AnimeCardCategorie;
