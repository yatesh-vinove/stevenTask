import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius:4,
          distributed: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "middle",
      },
      colors: [
        "#FD853A",
        "#7A5AF8",
        "#12B76A",
        "#0BA5EC",
        "#2E90FA",
        "#6172F3",
        "#F63D68",
        "#EE46BC",
      ],
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        title: {
          text: "Month",
        },
        categories: [
          "E-mail",
          "Banners",
          "Programmatic",
          "Custom media",
          "Endemic social",
          "SMS",
          "Direct mail",
          "EHR",
        ],
      },
      yaxis: {
        title: {
          text: "Total patients",
        },
      },
    },
  };
  const series = [
    {
      data: [
        { x: "E-mail", y: 16.7, color: "#FD853A" },
        { x: "Banners", y: 29.4, color: "#7A5AF8" },
        { x: "Programmatic", y: 17.7, color: "#12B76A" },
        { x: "Custom media", y: 9.1, color: "#0BA5EC" },
        { x: "Endemic social", y: 24.8, color: "#2E90FA" },
        { x: "SMS", y: 16.7, color: "#6172F3" },
        { x: "Direct mail", y: 18.7, color: "#F63D68" },
        { x: "EHR", y: 23.3, color: "#EE46BC" },
      ],
    },
  ];

  return (
    <Chart
      options={chartData.options}
      series={series}
      type="bar"
      height={300}
    />
  );
};

export default BarChart;
