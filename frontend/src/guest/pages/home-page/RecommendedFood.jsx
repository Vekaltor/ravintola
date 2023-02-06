const RecommendedFood = (props) => {
  const { Icon, name, description, src } = props;
  return (
    <div className="option">
      <div className="animation-block"></div>
      <div className="click-to-show">{Icon}</div>
      <span className="animation-text">
        <h2>{name}</h2>
        <span>{description}</span>
      </span>
      <img src={src} alt={name} />
    </div>
  );
};

export default RecommendedFood;
