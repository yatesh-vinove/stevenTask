import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";

const names = [""];

export default function BasicSelect({ filter }) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl xs={12} lg={3} sx={{}}>
      <Select
        size={"small"}
        sx={{
          borderRadius: "20px",
          paddingLeft: "16px",
          paddingRight: "16px",
          "& .MuiSelect-select": {
            paddingRight: "0px !important",
            height:'40px',color:'#344054',fontSize:'14px',fontWeight:'500',fontStyle:'normal'
          },
        }}
        multiple
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput />}
        IconComponent={() => filter.id ===1 ? filter.icon : <KeyboardArrowDownIcon />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography
                sx={{
                  color: "#344054",
                  fontFamily: "inter",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  paddingRight: "13px"
                }}
              >
                {filter.label}
              </Typography>
            );
          }

          return selected.join(", ");
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em
            style={{
              color: "#344054",
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            {filter.label}
          </em>
        </MenuItem>
        {filter.items && filter?.itemsArray.map((name) => (
          <MenuItem key={name} value={name} style={{}}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
