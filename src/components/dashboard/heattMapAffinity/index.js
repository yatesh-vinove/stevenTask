import React from "react";
import { Box, Grid } from "@mui/material";
import HeatMapChart from "../charts/heatMapChart";

function HeatMapAffinity() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        background: "#F9FAFB",
        borderRadius: "10px",
        paddingLeft: "24px",
        paddingRight: "24px",
        marginTop: "28px",
        marginBottom: "24px",
      }}
    >
      <HeatMapChart
        chartName="Digital Affinity"
        colors={["#FEDF89", "#F79009", "#B54708", "#7A2E0E", "#F79009"]}
      />
      {/* <Box sx={{ borderRight: "1px solid #E4E7EC" }} /> */}
      <HeatMapChart
        chartName="Personal Promotion Affinity"
        colors={["#A6F4C5", "#12B76A", "#027A48", "#054F31", "#12B76A"]}
      />
      {/* <Box sx={{ borderLeft: "1px solid #E4E7EC" }} /> */}
      <HeatMapChart
        chartName="Peer to Peer Affinity"
        colors={["#B9E6FE", "#0BA5EC", "#026AA2", "#0B4A6F", "#0BA5EC"]}
      />
    </Grid>
  );
}

export default HeatMapAffinity;
