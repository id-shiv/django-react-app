import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Drawer,
  Button,
  Divider,
  Typography,
  Paper,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

// styles
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  notificationIcon: {
    paddingLeft: 10,
    margin: 10,
  },
  notificationTitle: {
    // paddingLeft: 30,
    // justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
    position: "sticky",
    // borderLeft: 20,
    // borderLeftColor: "#CCCCCC",
  },
  notificationItem: {
    height: 50,
    paddingTop: 5,
    paddingLeft: 20,
    marginTop: 5,
    borderLeft: 5,
    borderLeftColor: "#CCCCCC",
  },
});

// Notification lifecylcle
export default function Notification() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  // notifications to display
  let notificationList = [
    { key: 1, value: "notification 1" },
    { key: 2, value: "notification 2" },
    { key: 3, value: "notification 3" },
    { key: 4, value: "notification 4" },
    { key: 5, value: "notification 5" },
    { key: 6, value: "notification 6" },
    { key: 7, value: "notification 7" },
    { key: 8, value: "notification 8" },
    { key: 9, value: "notification 9" },
    { key: 10, value: "notification 9" },
    { key: 11, value: "notification 9" },
    { key: 12, value: "notification 9" },
    { key: 13, value: "notification 9" },
    { key: 14, value: "notification 9" },
  ];

  // handle notification expand and collapse
  const handleNotificationExpand = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={handleNotificationExpand(false)}
      onKeyDown={handleNotificationExpand(false)}
    >
      <Container>
        <Typography
          variant="h6"
          align="center"
          className={classes.notificationTitle}
        >
          Notificatons
        </Typography>
        <Button>
          <Typography variant="caption">CLEAR</Typography>
        </Button>
      </Container>
      <Divider />
      {notificationList.map((notification) => (
        <Paper square className={classes.notificationItem} elevation={10}>
          <Typography variant="caption" key={notification.key}>
            {notification.value}
          </Typography>
        </Paper>
      ))}
    </div>
  );

  return (
    <React.Fragment>
      <Button
        onClick={handleNotificationExpand(true)}
        className={classes.notificationIcon}
      >
        <NotificationsIcon />
      </Button>
      <Drawer
        anchor="right"
        open={state}
        onClose={handleNotificationExpand(false)}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
}
