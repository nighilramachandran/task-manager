import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { HEADER } from "../../../utils/config";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{ position: "sticky", bgcolor: "background.header", borderRadius: 0 }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
        }}
      ></Toolbar>
    </AppBar>
  );
};

export default Header;
