import PropTypes from "prop-types";

function CarrouselItem({ name, imageSrc }) {

  return (
    <div className="carrousel-inner">
      <img src={imageSrc} alt={name} />
    </div>
  );
}

CarrouselItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
}

export default CarrouselItem;
