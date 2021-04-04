import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./Header";
import SideBar from "./SideBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* this is the header (full width) */}
      <Header classes={classes} />

      {/* this is the sidebar (as fixed drawer) */}
      <SideBar classes={classes} />

      {/* this is the main content */}
      <main className={classes.content}>
        {/* toolbar div provides margin from top to start the content below header */}
        <div className={classes.toolbar} />
        {/* actual main content goes here */}
      </main>
    </div>
  );
}
