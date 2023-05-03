import PropTypes from "prop-types";
import "./AnimeDetailedCard.scss";

export default function AnimeDetailedCard({ anime }) {
  return (
    <div className="anime-detailed-card">
      <div className="card-left">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <h3>{anime.title}</h3>
      </div>
      <div className="card-right">
        <h4>Synopsis :</h4>
        <p>{anime.synopsis}</p>
      </div>
    </div>
  );
}

AnimeDetailedCard.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    synopsis: PropTypes.string,
  }).isRequired,
};
