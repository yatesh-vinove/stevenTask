import {State} from "../../assets/icons";

export const FILTER = [
  {
    id:1,
    label: "State",
    items: false,
    icon: <State />,
  },
  {
    id:2,
    label: "Speciality",
    items: true,
    itemsArray: ["Speciality 1", "Speciality 2", "Speciality 3"]
  },
  {
    id:3,
    label: "Experience",
    items: true,
    itemsArray: ["Experience 1", "Experience 2", "Experience 3"]
  },
  {
    id:4,
    label: "NPI type",
    items: true,
    itemsArray: ["NPI type 1", "NPI type 2", "NPI type 3"]
  },
];
