import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import {
  LEFT_SIDE_CHART_SERIES,
  LEFT_SIDE_CHART_OPTIONS,
  RIGHT_SIDE_CHART_SERIES,
  RIGHT_SIDE_CHART_OPTIONS,
  LEGENDS,
} from "./constants";

const HorizontalBarChart = () => {
  return (
    <Grid container sx={{ border: "1px solid #E4E7EC", borderRadius: "10px" }}>
      <Grid
        item
        xs={12}
        sx={{ borderBottom: "1px solid  #E4E7EC", padding: "15px" }}
      >
        <Typography variant="h3"> Digital vs non-digital Affinity</Typography>
        <Typography variant="body1" sx={{ color: "#667085" }}>
          %, In percents
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        {LEGENDS.map((legend, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", marginRight: "24px" }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                background: legend.color,
                marginRight: "8px",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography>{legend.name}</Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "50%" }}>
          <Chart
            options={LEFT_SIDE_CHART_OPTIONS}
            series={LEFT_SIDE_CHART_SERIES}
            type="bar"
            height={400}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Chart
            options={RIGHT_SIDE_CHART_OPTIONS}
            series={RIGHT_SIDE_CHART_SERIES}
            type="bar"
            height={400}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HorizontalBarChart;
