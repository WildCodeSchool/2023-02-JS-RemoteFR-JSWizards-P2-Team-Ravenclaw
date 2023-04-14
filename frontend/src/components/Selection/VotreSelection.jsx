import PropTypes from "prop-types";
import "./VotreSelection.scss";

function VotreSelection({ anime }) {
  return (
    <div>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h2>{anime.title}</h2>
    </div>
  );
}

VotreSelection.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
  }).isRequired,
};

export default VotreSelection;
