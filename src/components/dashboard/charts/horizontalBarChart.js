import { Box, Grid } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import {
  LEFT_SIDE_CHART_SERIES,
  LEFT_SIDE_CHART_OPTIONS,
  RIGHT_SIDE_CHART_SERIES,
  RIGHT_SIDE_CHART_OPTIONS,
} from "./constants";

const HorizontalBarChart = () => {
  return (
    <Grid item xs={12} sx={{ display: "flex", width: "100%" }}>
      <Box xs={6} sx={{ width: "50%" }}>
        <Chart
          options={LEFT_SIDE_CHART_OPTIONS}
          series={LEFT_SIDE_CHART_SERIES}
          type="bar"
          height={400}
        />
      </Box>
      <Box xs={6} sx={{ width: "50%" }}>
        <Chart
          options={RIGHT_SIDE_CHART_OPTIONS}
          series={RIGHT_SIDE_CHART_SERIES}
          type="bar"
          height={400}
        />
      </Box>
    </Grid>
  );
};

export default HorizontalBarChart;
