const FormTextarea = ({ name, changeDetail, ...props }) => {
  let orginalName = name[0];
  let polishName = name[1];
  return (
    <div className="element">
      <label htmlFor={orginalName}>{polishName}</label>
      <textarea
        name={orginalName}
        id={orginalName}
        onChange={changeDetail}
        {...props}
      ></textarea>
    </div>
  );
};
export default FormTextarea;
