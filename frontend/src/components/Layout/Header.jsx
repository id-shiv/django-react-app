import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Notification from "./Notificaton";

const Header = (props) => {
  return (
    <AppBar position="fixed" className={props.classes.appBar}>
      <Toolbar>
        {/* this is the nofication (as temporary drawer) */}
        <Notification />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
