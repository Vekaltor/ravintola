const ButtonProviderToEdit = ({ click }) => {
  const handleClick = () => {
    click({
      isActivePopup: false,
      isActiveEditForm: true,
    });
  };

  return (
    <button className="edit button" onClick={handleClick}>
      Edycja
    </button>
  );
};

export default ButtonProviderToEdit;
