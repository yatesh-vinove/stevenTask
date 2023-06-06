import {
  BarChart,
  CheckSquare,
  Database,
  Rocket,
  Settings,
  Users,
} from "../../../assets/icons";

export const DRAWER_WIDTH = 280;
export const MENU_ITEMS = [
  {
    value: "Dashboard",
    icon: <BarChart />,
    outlinedIcon: <BarChart color="#667085" />,
  },
  {
    value: "Campaigns",
    icon: <Rocket />,
    outlinedIcon: <Rocket color="#667085" />,
  },
  {
    value: "Queries",
    icon: <CheckSquare />,
    outlinedIcon: <CheckSquare color="#667085" />,
  },
  {
    value: "Physicians",
    icon: <Users />,
    outlinedIcon: <Users color="#667085" />,
  },
  {
    value: "DataSources",
    icon: <Database />,
    outlinedIcon: <Database color="#667085" />,
  },
  {
    value: "Settings",
    icon: <Settings />,
    outlinedIcon: <Settings color="#667085" />,
  },
];
