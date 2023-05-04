import PropTypes from "prop-types";
import "./Episode.scss";

export default function Episode({ episode }) {
  return (
    <div className="episode">
      <img src={episode.images.jpg.image_url} alt={episode.title} />
      <div className="episode-desc">
        <h3>{episode.episode}</h3>
        <h4>{episode.title}</h4>
      </div>
    </div>
  );
}

Episode.propTypes = {
  episode: PropTypes.shape({
    episode: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
