import PropTypes from "prop-types";

export default function AnimeDetailedCard({ anime }) {
  return (
    <div className="anime-card">
      <img
        className="image-selection"
        src={anime.trailer.images.medium_image_url}
        alt={anime.title}
      />
      <h3>{anime.title}</h3>
      <h4>Synopsis :</h4>
      <p>{anime.synopsis}</p>
    </div>
  );
}

AnimeDetailedCard.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    trailer: PropTypes.shape({
      images: PropTypes.shape({
        medium_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
};
