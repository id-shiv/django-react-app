import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  //   fullList: {
  //     width: "auto",
  //   },
});

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
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h3 className="my-2 mx-5">Notificatons</h3>
      <Divider />
      <List>
        {notificationList.map((notification) => (
          <ListItem key={notification.key}>
            <ListItemText>{notification.value}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>Notifications</Button>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
}
