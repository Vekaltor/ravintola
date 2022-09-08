import { dayTagNames } from "./Data";

function TagDays() {
  return (
    <div className="tag-days">
      {dayTagNames.map((tag, index) => (
        <div key={index} className="tag-day">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default TagDays;
