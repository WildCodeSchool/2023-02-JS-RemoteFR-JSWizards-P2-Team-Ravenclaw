import { useState, useEffect } from "react";
import CarrouselItem from "./CarrouselItem";
import "./Carrousel.scss";

const items = [
  {
    id: 1,
    name: "Demon Slayer",
    imageSrc: "./src/assets/images-carrousel/demon-slayer.webp",
  },
  {
    id: 2,
    name: "Dr. Stone",
    imageSrc: "./src/assets/images-carrousel/dr-stone.webp",
  },
  {
    id: 3,
    name: "Suzume",
    imageSrc: "./src/assets/images-carrousel/suzume.webp",
  },
  {
    id: 4,
    name: "Bofuri",
    imageSrc: "./src/assets/images-carrousel/bofuri.webp",
  },
  {
    id: 5,
    name: "Skip & Loafer",
    imageSrc: "./src/assets/images-carrousel/skip-loafer.webp",
  },
  {
    id: 6,
    name: "Cheat Skill",
    imageSrc: "./src/assets/images-carrousel/cheat-skill.webp",
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
          <CarrouselItem
            key={item.id}
            imageSrc={item.imageSrc}
            name={item.name}
          />
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
