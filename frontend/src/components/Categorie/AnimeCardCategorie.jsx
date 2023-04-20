import PropTypes from "prop-types";
import "./VotreSelection.scss";

function AnimeCardCategorie({ anime }) {
  return (
    <div>
      <img
        className="image-selection"
        src={anime.images.jpg.image_url}
        alt={anime.title}
      />
      <h3>{anime.title}</h3>
    </div>
  );
}

AnimeCardCategorie.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default AnimeCardCategorie;
