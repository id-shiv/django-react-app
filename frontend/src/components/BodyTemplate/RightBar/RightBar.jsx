import React from "react";

import {
  NotificationsNone as NotificationIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  Feedback as FeedbackIcon,
} from "@material-ui/icons";

export default function RightBar({ classes }) {
  return (
    <>
      <a href="/" className={classes.rightbar__icon}>
        <NotificationIcon />
      </a>
      <a href="/about" className={classes.rightbar__icon}>
        <InfoIcon />
      </a>
      <a href="/" className={classes.rightbar__icon}>
        <FeedbackIcon />
      </a>
      <a href="/" className={classes.rightbar__icon}>
        <SettingsIcon />
      </a>
    </>
  );
}
