import { BsDisplay } from "react-icons/bs";
import { MdLightbulb, MdBookmarkAdded } from "react-icons/md";

export const progressBars = [
  {
    title: "Suma rezerwacji",
    textForLink: "Przejdź do rezerwacji",
    link: "/admin/reservations",
    value: 147,
    icon: <MdBookmarkAdded />,
    color: "#5144ef",
    num: 75,
  },
  {
    title: "Wszystkie dania",
    textForLink: "Zobacz wszystkie dania",
    link: "/admin/dishes",
    value: 50,
    icon: <MdLightbulb />,
    color: "#f89235",
    num: 77,
  },
  {
    title: "Odwiedzający online",
    textForLink: "Zobacz szczegóły",
    link: "/admin/#visitors",
    value: 699,
    icon: <BsDisplay />,
    color: "#afe94f",
    num: 94,
  },
];
