import Hour from "./Hour";

function Hours({ listHours, click }) {
  return (
    <>
      {listHours.map((hour, index) => (
        <Hour key={index} index={index} hour={hour} click={click} />
      ))}
    </>
  );
}

export default Hours;
