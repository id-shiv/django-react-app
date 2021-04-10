import React from "react";

import {
  NotificationsNone as NotificationIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  Feedback as FeedbackIcon,
} from "@material-ui/icons";

const Header = ({ classes }) => {
  return (
    <>
      {/* left side container */}
      <div className={classes.header__itemsleft__container}>
        <h2 className={classes.header__brand}>Project OR</h2>
      </div>

      {/* items in right */}
      <div className={classes.header__itemsright__container}>
        <a href="/" className={classes.header__itemsright}>
          <NotificationIcon />
        </a>
        <a href="/" className={classes.header__itemsright}>
          <InfoIcon />
        </a>
        <a href="/" className={classes.header__itemsright}>
          <FeedbackIcon />
        </a>
        <a href="/" className={classes.header__itemsright}>
          <SettingsIcon />
        </a>
      </div>
    </>
  );
};

export default Header;
