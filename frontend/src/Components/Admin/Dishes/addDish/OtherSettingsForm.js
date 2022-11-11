import testSRC from "../../../../img/king_prawns_640x966.jpg";
import FormSwitch from "./FormSwitch";

const OtherSettingsForm = ({ handleClick, changeDetail }) => {
  return (
    <div className="second-form section-form">
      <div className="header">Produkt</div>
      <div className="image">
        <img src={process.env.PUBLIC_URL + testSRC} alt="added img" />
      </div>
      <FormSwitch
        name={["recommended", "Rekomendacja"]}
        changeDetail={changeDetail}
      />
      <div className="buttons">
        <button type="submit" onClick={handleClick}>
          Dodaj produkt
        </button>
      </div>
    </div>
  );
};

export default OtherSettingsForm;
