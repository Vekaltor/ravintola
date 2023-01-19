const ButtonProviderToDelete = ({ click }) => {
  return (
    <button
      className="delete button"
      onClick={() =>
        click({
          isActivePopup: true,
          isActiveEditForm: false,
        })
      }
    >
      Usuń
    </button>
  );
};

export default ButtonProviderToDelete;
