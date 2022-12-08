import InfoCard from "./InfoCard";

import { BsDisplay } from "react-icons/bs";
import { MdLightbulb, MdBookmarkAdded } from "react-icons/md";

const ProgressBars = ({ dishes, reservations }) => {
  const amountDishes = dishes.length;
  const amountReservations = reservations.length;

  return (
    <div className="info-cards">
      <InfoCard
        title="Suma rezerwacji"
        textForLink="Przejdź do rezerwacji"
        link="/admin/reservations"
        value={amountReservations}
        icon={<MdBookmarkAdded />}
        color="#5144ef"
        percentage={75}
      />
      <InfoCard
        title="Wszystkie dania"
        textForLink="Zobacz wszystkie dania"
        link="/admin/dishes"
        value={amountDishes}
        icon={<MdLightbulb />}
        color="#f89235"
        percentage={77}
      />
      <InfoCard
        title="Odwiedzający online"
        textForLink="Zobacz szczegóły"
        link="/admin/#visitors"
        value={699}
        icon={<BsDisplay />}
        color="#afe94f"
        percentage={94}
      />
    </div>
  );
};

export default ProgressBars;
