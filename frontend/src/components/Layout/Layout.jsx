import React from "react";

// import components
import { Grid, Paper } from "@material-ui/core";

// import custom components
import { SideBar, NavBar } from "../../components/";

const Layout = () => {
  return (
    <Paper style={{ height: "100vh" }} square>
      <Grid container direction="column">
        <SideBar />
        <NavBar />
      </Grid>
    </Paper>
  );
};

export default Layout;
