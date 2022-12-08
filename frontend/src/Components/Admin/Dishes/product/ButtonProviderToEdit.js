const ButtonProviderToEdit = ({ boxRef, click }) => {
  const handleClick = () => {
    // boxRef.current.classList.add("blurred");
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
