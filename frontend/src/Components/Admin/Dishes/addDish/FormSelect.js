const FormSelect = (props) => {
  const { name, options, changeDetail } = props;

  let orginalName = name[0];
  let polishName = name[1];

  return (
    <div className="element">
      <label htmlFor={orginalName}>{polishName}</label>
      <select id={orginalName} name={orginalName} onChange={changeDetail}>
        {options}
      </select>
    </div>
  );
};

export default FormSelect;
