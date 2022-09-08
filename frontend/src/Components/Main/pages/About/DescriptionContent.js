import AboutChef from "./AboutChef";

import { chefs } from "./Data";

function DescriptionContent() {
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
      {chefs.map((chef, index) => (
        <AboutChef
          key={index}
          mainClassName={index === 0 ? "chef first" : "chef"}
          image={chef.image}
          nameChef={chef.nameChef}
          title={chef.title}
          description={chef.description}
        />
      ))}
    </div>
  );
}

export default DescriptionContent;
