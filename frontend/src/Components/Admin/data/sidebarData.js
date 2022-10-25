import {
  MdLogout,
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
    categoryTitle: "Główna",
    links: [{ id: 0, Icon: <MdDashboard />, name: "Home", pathname: "home" }],
  },
  {
    id: 1,
    categoryTitle: "Listy",
    links: [
      {
        id: 0,
        Icon: <MdOutlineRestaurantMenu />,
        name: "Dania",
        pathname: "dania",
      },
      {
        id: 1,
        Icon: <RiContactsBookFill />,
        name: "Rezerwacje",
        pathname: "rezerwacje",
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
        pathname: "aktywnosc",
      },
      {
        id: 1,
        Icon: <MdOutlineNotifications />,
        name: "Powiadomienia",
        pathname: "powiadomienia",
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
        pathname: "ustawienia",
      },
    ],
  },
  {
    id: 4,
    categoryTitle: "Użytkownik",
    links: [{ id: 0, Icon: <MdLogout />, name: "Wyloguj", pathname: "/admin" }],
  },
];
