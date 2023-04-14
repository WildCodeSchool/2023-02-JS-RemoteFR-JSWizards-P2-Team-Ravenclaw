import animes from "../helpers/animes.json";
import VotreSelection from "../components/VotreSelection";

export default function Home() {
  return (
    <div className="template-selection">
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
