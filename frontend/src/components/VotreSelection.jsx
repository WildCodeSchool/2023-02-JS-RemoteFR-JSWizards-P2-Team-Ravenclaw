import PropTypes from "prop-types";

function VotreSelection({ animes }) {
  return (
    <div>
      <img src={animes[0].images.jpg.image_url} alt={animes[0].title} />
      <h1>{animes[0].title}</h1>
    </div>
  );
}

VotreSelection.propTypes = {
  animes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
  }).isRequired,
};

export default VotreSelection;
