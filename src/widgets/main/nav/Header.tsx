import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { HEADER_SPACINGS, HEADER_TITLE } from "../../../utils/config";

const headerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        position: "sticky",
        bgcolor: "background.header",
        borderRadius: 0,
        padding: 0,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER_SPACINGS.H_MOBILE,
            md: HEADER_SPACINGS.H_MAIN_DESKTOP,
          },
          ...headerStyles,
        }}
      >
        <Typography>{HEADER_TITLE.toUpperCase()}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
