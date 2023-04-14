import CarrouselItem from "./CarrouselItem";

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
  return (
    <div className="carrousel">
      <div className="carrousel-inner" style={{ transform: "translateX(-0%)" }}>
        {items.map((item) => (
          <CarrouselItem imageSrc={item.imageSrc} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
