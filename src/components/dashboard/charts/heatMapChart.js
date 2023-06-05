import { Box } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import PieChart from "../../../assets/pieChart.png";
import Square from "../../../assets/square.png";

const HeatMapChart = (props) => {
  const { chartName, colors } = props;
  const options = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: [
            {
              icon: `<img src=${PieChart} style="padding: 8px; width:30px; height: 30px"/>`,
              class: "pieChartCustomIcon",
              click: function (chart, options, e) {
                console.log("clicked square custom-icon");
              },
            },
            {
              icon: `<img src=${Square} style="padding: 8px; width:30px; height: 30px" />`,
              class: "notificationCustomIcon",
              click: function (chart, options, e) {
                console.log("clicked  piechart ");
              },
            },
          ],
        },
      },
      animations: {
        enabled: false,
      },
    },
    title: {
      text: chartName,
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",

        color: "#263238",
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 1,
              to: 36,
              color: colors[0],
              name: "Low",
            },
            {
              from: 37,
              to: 70,
              color: colors[1],
              name: "Medium",
            },
            {
              from: 71,
              to: 96,
              color: colors[2],
              name: "High",
            },
            {
              from: 97,
              to: 100,
              color: colors[3],
              name: "Very High",
            },
            {
              name: "1%",
              color: colors[4],
            },
          ],
        },
      },
    },
    xaxis: {
      categories: ["", "", "", "", "", "", "", "", "", ""],
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          textAlign: "right",
        },
      },
    },
    legend: {
      position: "left",
      offsetY: 25,
    },
  };

  const data = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  ];

  const series = [
    {
      name: "",
      data: data[0],
    },
    {
      name: "36%",
      data: data[1],
    },
    {
      name: "",
      data: data[2],
    },
    {
      name: "34%",
      data: data[3],
    },
    {
      name: "",
      data: data[4],
    },
    {
      name: "",
      data: data[5],
    },
    {
      name: "",
      data: data[6],
    },
    {
      name: "25%",
      data: data[7],
    },
    {
      name: "",
      data: data[8],
    },
    {
      name: "4%",
      data: data[9],
    },
  ];

  return (
    <Box xs={4}>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        width="100%"
        height="auto"
      />
    </Box>
  );
};

export default HeatMapChart;
