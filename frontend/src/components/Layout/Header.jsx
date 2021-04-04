import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Notification from "./Notification";

// render back the component
const Header = () => {
  // declare a new state variable to set open
  const [open, setOpen] = useState(true);

  // toggle notifications
  const toggleDrawer = (open) => {
    open === true ? setOpen(false) : setOpen(true);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* this is the nofication (as temporary drawer) */}
        <Notification />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
