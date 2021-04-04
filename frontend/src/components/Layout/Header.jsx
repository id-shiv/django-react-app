import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  return (
    <AppBar position="fixed" className={props.classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          ORION
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
