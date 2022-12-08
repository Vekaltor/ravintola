import {
  MdDashboard,
  MdOutlineRestaurantMenu,
  MdOutlineNotifications,
} from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";

export const menuSideBar = [
  {
    id: 0,
    categoryTitle: "Panel",
    links: [{ id: 0, Icon: <MdDashboard />, name: "Panel", pathname: "" }],
  },
  {
    id: 1,
    categoryTitle: "Listy",
    links: [
      {
        id: 0,
        Icon: <MdOutlineRestaurantMenu />,
        name: "Dania",
        pathname: "dishes",
      },
      {
        id: 1,
        Icon: <RiContactsBookFill />,
        name: "Rezerwacje",
        pathname: "reservations",
      },
    ],
  },
  {
    id: 2,
    categoryTitle: "Diagramy",
    links: [
      {
        id: 0,
        Icon: <ImStatsBars />,
        name: "Aktywność",
        pathname: "activity",
      },
      {
        id: 1,
        Icon: <MdOutlineNotifications />,
        name: "Powiadomienia",
        pathname: "notifications",
      },
    ],
  },
  {
    id: 3,
    categoryTitle: "Usługi",
    links: [
      {
        id: 0,
        Icon: <IoMdSettings />,
        name: "Ustawienia",
        pathname: "settings",
      },
    ],
  },
];
