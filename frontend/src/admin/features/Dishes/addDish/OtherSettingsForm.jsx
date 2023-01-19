import { useRef } from "react";

import FormSwitch from "./FormSwitch";

import srcTemplateImage from "../../../../assets/img/upload_image_1280x896.png";

const OtherSettingsForm = ({ uploadedImg, changeDetail }) => {
  const style = uploadedImg ? { display: "block" } : { display: "none" };

  const btnRef = useRef();

  const handleClick = () => {
    btnRef.current.disabled = true;
  };

  return (
    <div className="second-form section-form">
      <div className="header">Produkt</div>
      <div className="image">
        <img
          src={process.env.PUBLIC_URL + srcTemplateImage}
          alt="Inserted from user"
        />
        <img
          src={process.env.PUBLIC_URL + uploadedImg}
          alt="Inserted from user"
          className="uploaded"
          style={style}
        />
      </div>
      <FormSwitch
        name={["recommended", "Rekomendacja"]}
        changeDetail={changeDetail}
      />
      <div className="buttons">
        <button type="submit" ref={btnRef} onSubmit={handleClick}>
          Dodaj produkt
        </button>
      </div>
    </div>
  );
};

export default OtherSettingsForm;
