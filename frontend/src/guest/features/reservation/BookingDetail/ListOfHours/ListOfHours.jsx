import ExitButton from "./ExitButton";
import Hours from "./Hours";
import "./ListOfHours.css";

function ListOfHours(props) {
  const {
    active,
    listHours,
    closeList,
    setActive,
    setDataFormState,
    elementListOfHoursRef,
  } = props;

  function handleClick(e) {
    setDataFormState("time", e.textContent);
    setActive(false);
  }

  const classActive = active ? " active" : " ";

  return (
    <div
      onClick={(e) => closeList("behind-list-of-hours", e)}
      className={`behind-list-of-hours ${classActive}`}
    >
      <div
        ref={elementListOfHoursRef}
        className={`list-of-hours ${classActive}`}
      >
        <Hours listHours={listHours} click={handleClick} />
        <ExitButton click={closeList} />
      </div>
    </div>
  );
}

export default ListOfHours;
