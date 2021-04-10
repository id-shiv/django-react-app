import React from "react";

import { Typography } from "@material-ui/core";

const SideBarSubButton = ({ classes, buttonProperty }) => {
  return (
    <>
      <a href="/" className={classes.sidebar__subbutton}>
        <div className={classes.sidebar__button__icon}>
          {buttonProperty.buttonIcon}
        </div>
        <Typography variant="caption" className={classes.sidebar__button__text}>
          {buttonProperty.buttonText}
        </Typography>
      </a>
    </>
  );
};

export default SideBarSubButton;
