import ButtonReservation from "./ButtonReservation";

import imageChef from "../../../assets/img/chef_icon_350x346.jpg";

const BannerReservation = () => {
  return (
    <section>
      <div className="sectionReservation">
        <div className="leftSide">
          <img src={imageChef} alt="imageChef" />
        </div>
        <div className="rightSide">
          <div className="btnToReservation">
            <ButtonReservation text="rezerwacja" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerReservation;
