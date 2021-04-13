import React from "react";

import {
  NotificationsNone as NotificationIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  Feedback as FeedbackIcon,
  AccountCircle as AccountCircleIcon,
  Description as DescriptionIcon,
} from "@material-ui/icons";

export default function RightBar({ classes }) {
  return (
    <>
      <a href="/" className={classes.rightbar__icon}>
        <AccountCircleIcon />
      </a>
      <a href="/notifications" className={classes.rightbar__icon}>
        <NotificationIcon />
      </a>
      <a href="/about" className={classes.rightbar__icon}>
        <InfoIcon />
      </a>
      <a href="/feedback" className={classes.rightbar__icon}>
        <FeedbackIcon />
      </a>
      <a href="/" className={classes.rightbar__icon}>
        <DescriptionIcon />
      </a>
      <a href="/" className={classes.rightbar__icon}>
        <SettingsIcon />
      </a>
    </>
  );
}
