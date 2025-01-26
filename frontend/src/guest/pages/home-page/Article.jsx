import AboutRestauration from "./AboutRestauration";
import { aboutRestauration } from "../../../data/aboutRestauration";

const Article = () => {
  return (
    <article>
      <div className="about-restauration">
        <span>
          <h1>Sekrety naszej kuchni </h1>
        </span>
        <div>
          <AboutRestauration data={aboutRestauration} />
        </div>
      </div>
    </article>
  );
};

export default Article;
