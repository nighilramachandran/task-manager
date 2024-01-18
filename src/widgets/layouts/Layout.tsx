import React, { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Header from "../main/nav/Header";
import { Grid, Paper, Stack } from "@mui/material";
import SideBar from "../../components/SideBar";
import { SIDE_BARS } from "../../utils/config";

const gridStyles: CSSProperties = {
  minHeight: `calc(100vh - 55px);`,
  padding: 2,
};

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          ...gridStyles,
        }}
        spacing={3}
      >
        <Grid item xs={12} md={2}>
          <SideBar items={SIDE_BARS} />
        </Grid>
        <Grid item xs={12} md={10}>
          <Paper sx={{ height: "100%" }}>
            <Outlet />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
