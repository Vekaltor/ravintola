import FormSwitch from "./FormSwitch";

import srcTemplateImage from "../../../../img/upload_image_1280x896.png";

const OtherSettingsForm = ({ uploadedImg, changeDetail }) => {
  const imageSrc = uploadedImg
    ? uploadedImg
    : process.env.PUBLIC_URL + srcTemplateImage;

  return (
    <div className="second-form section-form">
      <div className="header">Produkt</div>
      <div className="image">
        <img src={imageSrc} alt="Inserted from user" />
      </div>
      <FormSwitch
        name={["recommended", "Rekomendacja"]}
        changeDetail={changeDetail}
      />
      <div className="buttons">
        <button type="submit">Dodaj produkt</button>
      </div>
    </div>
  );
};

export default OtherSettingsForm;
