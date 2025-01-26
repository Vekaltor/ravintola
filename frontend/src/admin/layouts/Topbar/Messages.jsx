import { FiMessageSquare } from "react-icons/fi";

function Messages() {
  return (
    <div className="messages">
      <span className="icon">
        <FiMessageSquare />
      </span>
      <span className="counter">2</span>
    </div>
  );
}

export default Messages;
