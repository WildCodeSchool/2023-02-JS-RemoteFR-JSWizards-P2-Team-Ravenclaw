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

  let imgSrc = anime.trailer.images.large_image_url;
  if (!anime.trailer.images.large_image_url) {
    imgSrc = "/assets/coming-soon.png";
  }
  return (
    <div className="anime">
      <img className="main-image" src={imgSrc} alt={anime.title} />
      <div className="anime-desc">
        <h2>{anime.title}</h2>
        <p>{anime.synopsis ? `${anime.synopsis}` : "Absence de synopsis"}</p>
      </div>
      {anime.trailer.embed_url ? (
        <iframe
          src={anime.trailer.embed_url}
          title={anime.title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      ) : (
        ""
      )}
      <div className="episode-main">
        {episodes.map((episode) => (
          <Episode key={episode.mal_id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
