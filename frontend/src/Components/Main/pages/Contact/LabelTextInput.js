function LabelTextInput({ title, icon: Icon }) {
  return (
    <label>
      {title}
      <div>
        <div className="icon">{Icon}</div>
        <div>
          <input type="text" />
        </div>
      </div>
    </label>
  );
}

export default LabelTextInput;
