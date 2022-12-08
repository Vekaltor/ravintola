const DescriptionDish = ({ description, icon: Icon, setAction }) => {
  const handleClick = () => {
    setAction(true);
  };

  return (
    <>
      <span>{description ? description : "dodaj opis"}</span>
      <span className="icon" onClick={handleClick}>
        {Icon}
      </span>
    </>
  );
};

export default DescriptionDish;
