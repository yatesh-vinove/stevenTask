import {
  Email,
  Banners,
  Programmatic,
  CustomMedia,
  EndemicSocial,
  SMS,
  DirectMail,
  EHR,
} from "../../../assets/icons";

export const RIGHT_SIDE_CHART_SERIES = [
  {
    name: "Personal Promotion",
    data: [33, 14, 18],
    color: "#DB97D2",
  },
  {
    name: "Peer to Peer",
    data: [23, 29, 18],
    color: "#F3DBF1",
  },
];

export const RIGHT_SIDE_CHART_OPTIONS = {
  chart: {
    id: "negative-bar-chart",
    stacked: true,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      //   barWidth: "30%",
      //   barHeight: "30%",
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return val + "%";
        },
      },
    },
  },
  xaxis: {
    categories: ["1st Preference", "2nd Preference", "3rd Preference"],
    style: {},
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
};

export const LEFT_SIDE_CHART_SERIES = [
  {
    name: "Digital",
    data: [40, 57, 64],
    color: "#AD509E",
  },
];

export const LEFT_SIDE_CHART_OPTIONS = {
  chart: {
    id: "negative-bar-chart",
    stacked: true,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return val + "%";
        },
      },
    },
  },
  xaxis: {
    categories: ["", "", ""],
  },
  yaxis: {
    reversed: true,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
};

export const LEGENDS = [
  { name: "Digital", data: [40, 57, 64], color: "#AD509E" },
  {
    name: "Personal Promotion",
    data: [33, 14, 18],
    color: "#DB97D2",
  },
  {
    name: "Peer to Peer",
    data: [23, 29, 18],
    color: "#F3DBF1",
  },
];

export const BAR_CHART_LEGENDS = [
  { label: "E-mail", icon: <Email /> },
  { label: "Banners", icon: <Banners /> },
  { label: "Programmatic", icon: <Programmatic /> },
  { label: "Custom media", icon: <CustomMedia /> },
  { label: "Endemic social", icon: <EndemicSocial /> },
  { label: "SMS", icon: <SMS /> },
  { label: "Direct mail", icon: <DirectMail /> },
  { label: "EHR", icon: <EHR /> },
];
