import image from "../../../../img/king_prawns_640x966.jpg";

function FirstDish({ name, weight, description, price, imageSrc }) {
  return (
    <div className="option-with-image">
      <img src={image} alt={name} />
      <div className="option">
        <div className="item">
          <span className="name">
            {name}
            <span>({weight} G)</span>
          </span>
          <span className="ingredients">{description}</span>
          <span className="price"> ${price}.00</span>
        </div>
      </div>
    </div>
  );
}

export default FirstDish;
