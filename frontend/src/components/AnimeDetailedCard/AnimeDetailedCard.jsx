import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./AnimeDetailedCard.scss";

export default function AnimeDetailedCard({ anime }) {
  let { synopsis } = anime;
  if (!synopsis) {
    synopsis = "Absence de synopsis !";
  }
  return (
    <div className="anime-detailed-card">
      <Link to={`/anime/${anime.mal_id}`}>
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          height="120px"
        />
        <h3>{anime.title}</h3>
        <p>{synopsis}</p>
      </Link>
    </div>
  );
}

AnimeDetailedCard.propTypes = {
  anime: PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    synopsis: PropTypes.string,
  }).isRequired,
};
