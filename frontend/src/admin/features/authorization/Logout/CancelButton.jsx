const CancelButton = (props) => {
  return (
    <div className="cancel-button" onClick={props.click}>
      <span>Anuluj</span>
    </div>
  );
};

export default CancelButton;
