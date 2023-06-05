import {
  BarChart,
  CheckSquare,
  Database,
  Rocket,
  Settings,
  Users,
} from "../../../assets/icons";

export const DRAWER_WIDTH = 240;
export const MENU_ITEMS = [
  {
    value: "Dashboard",
    icon: <BarChart />,
    outlinedIcon: <BarChart color="#AD509E" />,
  },
  {
    value: "Campaigns",
    icon: <Rocket />,
    outlinedIcon: <Rocket color="#AD509E" />,
  },
  {
    value: "Queries",
    icon: <CheckSquare />,
    outlinedIcon: <CheckSquare color="#AD509E" />,
  },
  {
    value: "Physicians",
    icon: <Users />,
    outlinedIcon: <Users color="#AD509E" />,
  },
  {
    value: "DataSources",
    icon: <Database />,
    outlinedIcon: <Database color="#AD509E" />,
  },
  {
    value: "Settings",
    icon: <Settings />,
    outlinedIcon: <Settings color="#AD509E" />,
  },
];
