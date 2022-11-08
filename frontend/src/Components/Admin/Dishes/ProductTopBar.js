import srcImg from "../../../img/recommended_food2_1920_1271.jpg";

const ProductTopBar = ({ dish }) => {
  const { name } = dish;

  return (
    <div className="top">
      <h2>Szczegółowe informacje</h2>
      <div className="image">
        <img src={srcImg} alt={name} />
        <span className="name">{name}</span>
      </div>
    </div>
  );
};

export default ProductTopBar;
