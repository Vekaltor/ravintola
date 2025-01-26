import defaultImage from "../../../../assets/img/recommended_food2_400x250.jpg";

const ProductTopBar = ({ dish }) => {
  const { name, image } = dish;

  const src = image ? image : process.env.PUBLIC_URL + defaultImage;

  return (
    <div className="top">
      <h2>Szczegółowe informacje</h2>
      <div className="image">
        <img src={src} alt={name} />
        <span className="name">{name}</span>
      </div>
    </div>
  );
};

export default ProductTopBar;
