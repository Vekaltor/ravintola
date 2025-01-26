import { MdNotificationsNone } from "react-icons/md";

function Notifications() {
  return (
    <div className="notifications">
      <span className="icon">
        <MdNotificationsNone />
      </span>
      <span className="counter">1</span>
    </div>
  );
}

export default Notifications;
