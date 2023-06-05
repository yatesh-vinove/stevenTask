import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { DRAWER_WIDTH } from "../sideBar/constants";
import {
  BackButton,
  Hamburger,
  Notification,
  Search,
} from "../../../assets/icons";
import Avatar from "../../../assets/avatar.png";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header(props) {
  const { openDrawer, drawerOpen, closeDrawer } = props;
  return (
    <AppBar position="fixed" open={drawerOpen} sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{ background: "#FFFFFF", borderBottom: "1px solid #E4E7EC" }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          edge="start"
        >
          <Box onClick={drawerOpen ? openDrawer : closeDrawer}>
            {drawerOpen ? <BackButton /> : <Hamburger />}
          </Box>
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ color: "#101828", marginLeft: "24px" }}
        >
          Affinity Hub
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            gap: "29px",
          }}
        >
          <Box sx={{}}>
            <Search />
          </Box>
          <Box sx={{}}>
            <Notification />
          </Box>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <img src={Avatar} alt="user avatar" width="40px" height="40px" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#344054" }}>Kari Rasmussen</Typography>
              <Typography sx={{ color: "#667085" }}>
                kari@pharmaforceiq.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
