function AboutChef({ mainClassName, image, nameChef, title, description }) {
  return (
    <div className={mainClassName}>
      <div className="image">
        <img src={image} alt={image} />
      </div>
      <div className="description">
        <h2>{nameChef}</h2>
        <span>{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default AboutChef;
