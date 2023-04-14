import animes from "../helpers/animes.json";
import VotreSelection from "../components/VotreSelection";

export default function Home() {
  return (
    <div>
      <h1> Votre Slection </h1>
      <VotreSelection animes={animes} />
    </div>
  );
}
