import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FILTER } from "./constants";
import { BasicSelect } from "../shared";
import HeatMapAffinity from "./heattMapAffinity";
import DigitalChannelAffinity from "./digitalChannelAffinity";
import DigitalVsNonDigitalAffinity from "./digitalVsNonDigitalAffinity";

function Dashboard() {
  return (
    <Grid>
      {/* Filters */}
      <Grid container>
        {FILTER.map((item) => {
          return (
            <Box sx={{ marginRight: "16px" }}>
              <BasicSelect filter={item} />
            </Box>
          );
        })}
      </Grid>
      {/* <Typography
        sx={{
          color: "#101828",
          fontFamily: "inter",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "32px",
          paddingBottom: "24px",
        }}
      >
        Channel Affinity
      </Typography> */}

      {/* Heat Map Chart */}
      <HeatMapAffinity />

      {/* Digital vs non-digital Affinity */}
      <DigitalVsNonDigitalAffinity />

      {/* Digital Channel Affiniy */}
      <DigitalChannelAffinity />
    </Grid>
  );
}

export default Dashboard;
