function Hour({ hour, index, click }) {
  return (
    <span data-hour={hour} key={index} onClick={(e) => click(e.target)}>
      {hour}
    </span>
  );
}

export default Hour;
