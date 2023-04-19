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
      <h2>{anime.title}</h2>
    </div>
  );
}

AnimeCardCategorie.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimeCardCategorie;
