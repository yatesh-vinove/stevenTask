import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { BAR_CHART_LEGENDS } from "../charts/constants";
import BarChart from "../charts/barChart";

export default function DigitalChannelAffinity() {
  const [preference, setPreference] = useState(0);
  return (
    <Grid sx={{ border: "1px solid #E4E7EC", borderRadius: "10px" }}>
      <Grid
        item
        xs={12}
        sx={{ borderBottom: "1px solid  #E4E7EC", padding: "24px" }}
      >
        <Typography
          sx={{
            color: "#101828",
            fontFamily: "inter",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "28px",textAlign:'left',marginBottom:'20px'
          }}
        >
          Digital Channel Affinity
        </Typography>
        <Grid container sx={{}}>
          {["All", "1st Preference", "2nd Preference", "3rd Preference"].map(
            (item, index) => {
              return (
                <Box sx={{ padding: "4px", background: "#F9FAFB" }}>
                  <Typography
                    sx={{
                      color: index === preference ? "#101828" : "#667085",
                      fontFamily: "inter",
                      fontWeight: index === preference ? "600" : "500",
                      fontSize: "14px",
                      lineHeight: "20px",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      boxShadow: index === preference && "0px 1px 3px #101828",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              );
            }
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={10}>
          <BarChart />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            borderLeft: "1px solid #E4E7EC",
            paddingTop: "20px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Typography
            sx={{
              color: "#101828",
              fontFamily: "inter",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "20px",
              paddingBottom: "9px",
            }}
          >
            Channel
          </Typography>
          {BAR_CHART_LEGENDS.map((legend) => {
            return (
              <Grid container>
                <Box>{legend.icon}</Box>
                <Typography
                  sx={{
                    color: "#667085",
                    fontFamily: "inter",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "18px",
                    paddingLeft: "12px",
                  }}
                >
                  {legend.label}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
