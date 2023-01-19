import Hour from "./Hour";

function Hours({ listHours, click }) {
  const hours = listHours.map((hour, index) => (
    <Hour key={index} index={index} hour={hour} click={click} />
  ));

  return hours;
}

export default Hours;
