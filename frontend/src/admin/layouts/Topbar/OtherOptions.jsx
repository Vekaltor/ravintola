import Avatar from "./Avatar";
import Language from "./Language";
import Messages from "./Messages";
import Notifications from "./Notifications";
import TemplateMode from "./TemplateMode";

function OtherOptions() {
  return (
    <div className="other-options">
      <Language />
      <TemplateMode />
      <Notifications />
      <Messages />
      <Avatar />
    </div>
  );
}

export default OtherOptions;
