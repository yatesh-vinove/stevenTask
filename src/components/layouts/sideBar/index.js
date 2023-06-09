import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { MENU_ITEMS, DRAWER_WIDTH } from "./constants";
import Logo from "../../../assets/logo.png";
import { Hamburger } from "../../../assets/icons";

export default function SideBar(props) {
  const { closeDrawer, drawerOpen } = props;
  const [activeOption, setActiveOption] = useState(null);

  const openedMixin = (theme) => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Drawer variant="permanent" open={drawerOpen}>
      <DrawerHeader sx={{ justifyContent: "flex-start",height:'72px' }}>
        <IconButton onClick={closeDrawer} sx={{marginLeft: "10px"}}>
          <Hamburger />
        </IconButton>
        <IconButton sx={{marginLeft: "15px"}}>
          <img src={Logo} alt="brand logo" />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ bgcolor: "#E4E7EC" }} />
      <List>
        {MENU_ITEMS.map((menuItem, index) => {
          return (
            <ListItem
              key={menuItem.value}
              disablePadding
              sx={{
                background: activeOption === index ? "#FAEDF9" : "transparent",
                display: "block",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: drawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => setActiveOption(index)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {activeOption === index
                    ? menuItem.outlinedIcon
                    : menuItem.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menuItem.value}
                  sx={{
                    color: activeOption === index ? "#AD509E" : "#344054",
                    opacity: drawerOpen ? 1 : 0,
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                />
              </ListItemButton>
              {index === 4 && (
                <Box
                  sx={{
                    marginTop: "32px",
                    marginBottom: "32px",
                    border: "1px solid #E4E7EC",
                  }}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
