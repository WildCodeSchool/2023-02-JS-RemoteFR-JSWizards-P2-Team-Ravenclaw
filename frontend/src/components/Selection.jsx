import PropTypes from "prop-types";
import VotreSelection from "./VotreSelection";

function Selection({ animes }) {
  return (
    <div>
      <h1> VOTRE SELECTION </h1>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
      <div className="anime-card">
        {animes.map((anime) => (
          <VotreSelection key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <hr size="10" width="100%" align="center" color="#8D99AE" />
    </div>
  );
}

Selection.propTypes = {
  animes: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
};

export default Selection;
