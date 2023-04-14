import demonSlayerSrc from "../assets/images-carrousel/demon-slayer.webp";
import drStoneSrc from "../assets/images-carrousel/dr-stone.webp";
import suzumeSrc from "../assets/images-carrousel/suzume.webp";

function Carrousel() {
  return (
    <div className="carrousel">
      <div className="carrousel-inner">
        <img src={demonSlayerSrc} alt="Demon Slayer" />
      </div>
      <div className="carrousel-item">
        <img src={drStoneSrc} alt="Dr. Stone" />
      </div>
      <div className="carrousel-item">
        <img src={suzumeSrc} alt="Suzume" />
      </div>
    </div>
  );
}

export default Carrousel;
