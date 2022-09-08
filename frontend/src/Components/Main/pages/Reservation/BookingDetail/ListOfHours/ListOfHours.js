import ExitButton from "./ExitButton";
import Hours from "./Hours";
import "./ListOfHours.css";

function ListOfHours(props) {
  function handleClick(e) {
    props.removeStyleFromPrevSelected();
    props.addStyleToSelectedTarget(e);
    props.setTime(e.textContent);
    props.setActive(false);
  }

  return (
    <div
      onClick={(e) => props.closeList("behind-list-of-hours", e)}
      className={
        props.active ? "behind-list-of-hours active" : "behind-list-of-hours"
      }
    >
      <div className={props.active ? "list-of-hours active" : "list-of-hours"}>
        <Hours listHours={props.listHours} click={handleClick} />
        <ExitButton click={props.closeList} />
      </div>
    </div>
  );
}

export default ListOfHours;
