function ExitButton({ click }) {
  return (
    <div className="close" onClick={(e) => click("close", e)}>
      <span className="close"></span>
    </div>
  );
}

export default ExitButton;
