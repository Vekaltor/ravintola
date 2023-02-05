import AboutChef from "./AboutChef";

import { chefs } from "../../../data/chefs";

function DescriptionContent() {
  const AboutChefComponents = chefs.map((chef, index) => (
    <AboutChef
      key={index}
      mainClassName={index === 0 ? "chef first" : "chef"}
      {...chef}
    />
  ));

  return (
    <div className="description">
      <h2>Długa historia...</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        voluptates dolore obcaecati sint modi enim unde quam voluptatibus
        voluptatum cumque architecto, dolores, quaerat recusandae, beatae
        consectetur. Beatae hic aut quasi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Placeat voluptates dolore obcaecati sint
        modi enim unde quam voluptatibus voluptatum cumque architecto, dolores,
        quaerat recusandae, beatae consectetur. Beatae hic aut quasi.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Placeat voluptates dolore
        obcaecati sint modi enim unde quam voluptatibus voluptatum cumque
        architecto, dolores, quaerat recusandae, beatae consectetur. Beatae hic
        aut quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat voluptates dolore obcaecati sint modi enim unde quam
        voluptatibus voluptatum cumque architecto, dolores, quaerat recusandae,
        beatae consectetur. Beatae hic aut quasi.
      </span>
      <div className="line"></div>
      <h2>Nasz zespół</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        voluptates dolore obcaecati sint modi enim unde quam voluptatibus
        voluptatum cumque architecto, dolores, quaerat recusandae, beatae
        consectetur. Beatae hic aut quasi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Placeat voluptates dolore obcaecati sint
        modi enim unde quam voluptatibus voluptatum cumque architecto, dolores,
        quaerat recusandae, beatae consectetur. Beatae hic aut quasi.
      </span>
      <div className="line"></div>
      <h2>Najlepsi z najlepszych</h2>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates.
      </span>
      {AboutChefComponents}
    </div>
  );
}

export default DescriptionContent;
