import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HeatMapChart from "./charts/heatMapChart";
import HorizontalBarChart from "./charts/horizontalBarChart";
import BarChart from "./charts/barChart";

function Dashboard() {
  return (
    <>
      <Grid>
        <Box>
          <Typography varient="h2">Channel Affinity</Typography>
        </Box>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <HeatMapChart
            chartName="Digital Affinity"
            colors={["#FEDF89", "#F79009", "#B54708", "#7A2E0E", "#F79009"]}
          />
          <HeatMapChart
            chartName="Personal Promotion Affinity"
            colors={["#A6F4C5", "#12B76A", "#027A48", "#054F31", "#12B76A"]}
          />
          <HeatMapChart
            chartName="Peer to Peer Affinity"
            colors={["#B9E6FE", "#0BA5EC", "#026AA2", "#0B4A6F", "#0BA5EC"]}
          />
        </Grid>
        <Box>
          <HorizontalBarChart />
        </Box>
        <Box>
          <BarChart />
        </Box>
      </Grid>
      <Grid>
        
      </Grid>
    </>
  );
}

export default Dashboard;
