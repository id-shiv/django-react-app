import React, { lazy } from "react";
import { Route } from "react-router-dom";

// List and Divider
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/core/styles";

// Icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

// styles
const useStyles = makeStyles((theme) => ({
  listitem: {
    marginLeft: 8,
  },
}));

// render back the component
const SideBar = () => {
  // get styles
  const classes = useStyles();

  // get required routes
  const { Home, About } = lazy(() => import("../routes"));

  return (
    <div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} className={classes.listitem}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {index % 2 === 0 ? (
                <InboxIcon>
                  <Route exact path="/home" component={Home} />
                </InboxIcon>
              ) : (
                <Route exact path={About} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text} className={classes.listitem}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
