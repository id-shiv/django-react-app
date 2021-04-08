import React from "react";

// import components
import { Paper } from "@material-ui/core";
import {
  NotificationsNone as NotificationIcon,
  Settings as SettingsIcon,
} from "@material-ui/icons";

const NavBar = ({ classes }) => {
  return (
    <Paper elevation={0} square className={classes.navBarContainer}>
      {/* left side container */}

      <div className={classes.navBarSearch}></div>
      {/* <input
        className={classes.navBarSearch}
        type="text"
        placeholder="Search.."
        autofocus
      /> */}

      {/* space in center, stratch to right */}
      <div className={classes.navBarInBetween}></div>

      {/* items in right */}
      <a href="/" className={classes.navBarItemsRight}>
        <NotificationIcon />
      </a>
      <a href="/" className={classes.navBarItemsRight}>
        <SettingsIcon />
      </a>
    </Paper>
  );
};

export default NavBar;
