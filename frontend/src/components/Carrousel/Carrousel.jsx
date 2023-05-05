import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarrouselItem from "./CarrouselItem";
import "./Carrousel.scss";

const items = [
  {
    id: 1,
    name: "Demon Slayer",
    imageSrc: "./assets/images-carrousel/demon-slayer.webp",
    url: "/anime/55116",
  },
  {
    id: 2,
    name: "Dr. Stone",
    imageSrc: "./assets/images-carrousel/dr-stone.webp",
    url: "/anime/38691",
  },
  {
    id: 3,
    name: "Suzume",
    imageSrc: "./assets/images-carrousel/suzume.webp",
    url: "/anime/50594",
  },
  {
    id: 4,
    name: "Mashle",
    imageSrc: "./assets/images-carrousel/mashle.webp",
    url: "/anime/52211",
  },
  {
    id: 5,
    name: "Skip & Loafer",
    imageSrc: "./assets/images-carrousel/skip-loafer.webp",
    url: "/anime/50416",
  },
  {
    id: 6,
    name: "Cheat Skill",
    imageSrc: "./assets/images-carrousel/cheat-skill.webp",
    url: "/anime/52830",
  },
];

function Carrousel() {
  const [activeItem, setActiveItem] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateItem = (index) => {
    let newIndex = index;
    if (index < 0) {
      newIndex = items.length - 1;
    } else if (index >= items.length) {
      newIndex = 0;
    }
    setActiveItem(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateItem(activeItem + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carrousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carrousel-inner"
        style={{ transform: `translateX(-${activeItem * 100}%)` }}
      >
        {items.map((item) => (
          <Link to={item.url} key={item.id}>
            <CarrouselItem
              key={item.id}
              imageSrc={item.imageSrc}
              name={item.name}
            />
          </Link>
        ))}
      </div>
      <div className="carrousel-nav">
        <button
          type="button"
          className="prev-bt"
          onClick={() => updateItem(activeItem - 1)}
        >
          &nbsp;&nbsp;
        </button>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`item-bt ${index === activeItem ? "active" : ""}`}
            onClick={() => updateItem(index)}
          >
            •
          </button>
        ))}
        <button
          type="button"
          className="next-bt"
          onClick={() => updateItem(activeItem + 1)}
        >
          &nbsp;&nbsp;
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
