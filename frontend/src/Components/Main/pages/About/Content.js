import Aside from "./Aside";
import DescriptionContent from "./DescriptionContent";

function Content() {
  return (
    <div className="about-content">
      <div className="image-header">
        <div></div>
      </div>
      <DescriptionContent />
      <Aside />
    </div>
  );
}

export default Content;
