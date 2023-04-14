import { useState } from "react";
import CarrouselItem from "./CarrouselItem";
import "./carrousel.scss";

const items = [
  {
    name: "Demon Slayer",
    imageSrc: "./src/assets/images-carrousel/demon-slayer.webp",
  },
  {
    name: "Dr. Stone",
    imageSrc: "./src/assets/images-carrousel/dr-stone.webp",
  },
  {
    name: "Suzume",
    imageSrc: "./src/assets/images-carrousel/suzume.webp",
  },
];

function Carrousel() {
  const [activeItem, setActiveItem] = useState(0);

  const handleClickUpdateItem = (index) => {
    let newIndex = index;
    if (index < 0) {
      newIndex = 0;
    } else if (index >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveItem(newIndex);
  };

  return (
    <div className="carrousel">
      <div
        className="carrousel-inner"
        style={{ transform: `translateX(-${activeItem * 100}%)` }}
      >
        {items.map((item) => (
          <CarrouselItem imageSrc={item.imageSrc} name={item.name} />
        ))}
      </div>
      <div className="carrousel-nav">
        <button
          type="button"
          onClick={() => handleClickUpdateItem(activeItem - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => handleClickUpdateItem(activeItem + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
