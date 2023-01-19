import { dayTagNames } from "../../../data/calendarData";

function TagDays() {
  const tagDays = dayTagNames.map((tag, index) => (
    <div key={index} className="tag-day">
      {tag}
    </div>
  ));

  return <div className="tag-days">{tagDays}</div>;
}

export default TagDays;
