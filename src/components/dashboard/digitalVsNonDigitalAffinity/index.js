import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HorizontalBarChart from "../charts/horizontalBarChart";
import { LEGENDS } from "../charts/constants";
import HorizontalBar from "../../../assets/horizontalBarChart.png";
import Pie from "../../../assets/pieChart.png";
import Bar from "../../../assets/barChart.png";

export default function DigitalVsNonDigitalAffinity() {
  return (
    <Grid
      container
      sx={{
        border: "1px solid #E4E7EC",
        borderRadius: "10px",
        paddingLeft: "9px",
        paddingRight: "9px",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ borderBottom: "1px solid  #E4E7EC", padding: "24px" }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: "#101828",
              fontFamily: "inter",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "28px",
              fontStyle: "normal",
            }}
          >
            Digital vs non-digital Affinity
          </Typography>
          <Box
            className="pieChartCustomIcon"
            sx={{
              marginLeft: "auto",
              height: "40px",
              color: "#1D2939",
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            <img src={Bar} />
          </Box>
          <Box
            className="notificationCustomIcon"
            sx={{
              height: "40px",
              color: "#1D2939",
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
              borderRadius: "0px 0px 0px 0px",
            }}
          >
            <img src={Pie} />
          </Box>
          <Box
            className="notificationCustomIcon"
            sx={{
              height: "40px",
              color: "#1D2939",
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            <img src={HorizontalBar} />
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#667085",
            fontFamily: "inter",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            fontStyle: "normal",
          }}
        >
          %, In percents
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
      >
        {LEGENDS.map((legend, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "24px",
            }}
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
            <Typography
              sx={{
                color: "#667085",
                fontFamily: "inter",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {legend.name}
            </Typography>
          </Box>
        ))}
      </Grid>
      <HorizontalBarChart />
      <Grid item xs={12} sx={{}}>
        <Typography
          textAlign="center"
          sx={{
            color: "#667085",
            fontFamily: "inter",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          Percent of individuals
        </Typography>
      </Grid>
    </Grid>
  );
}
