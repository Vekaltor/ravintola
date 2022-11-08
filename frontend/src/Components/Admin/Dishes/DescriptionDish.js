const DescriptionDish = ({ description, icon: Icon, setAction }) => {
  const handleClick = () => {
    setAction(true);
  };

  return (
    <>
      <span>{description}</span>
      <span className="icon" onClick={handleClick}>
        {Icon}
      </span>
    </>
  );
};

export default DescriptionDish;
