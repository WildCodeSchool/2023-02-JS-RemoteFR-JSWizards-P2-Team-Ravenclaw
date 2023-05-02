import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Episode from "./Episode/Episode";
import "./Anime.scss";

export default function Anime() {
  const { idAnime } = useParams();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [anime, setAnime] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const API = `https://api.jikan.moe/v4/anime/${idAnime}/full`;
  const APIEpisodes = `https://api.jikan.moe/v4/anime/${idAnime}/videos/episodes`;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setAnime(response.data.data);
        setLoading(true);
      })
      .catch((e) => console.error(e));
    axios
      .get(APIEpisodes)
      .then((response) => {
        setEpisodes(response.data.data);
        setLoading2(true);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!loading || !loading2) {
    return (
      <div className="loading-screen">
        <img src="/assets/no-boring.gif" alt="Loading Gif" />
      </div>
    );
  }
  return (
    <div className="anime">
      <div>
        <img src={anime.trailer.images.large_image_url} alt={anime.title} />
        <h2>{anime.title}</h2>
        <p>{anime.synopsis}</p>
        <iframe
          width="1280"
          height="720"
          src={anime.trailer.embed_url}
          title="Cowboy Bebop - Japanese Blu-ray Trailer [HD]"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        {episodes.map((episode) => (
          <Episode key={episode.mal_id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
