import React from "react";

import { Typography } from "@material-ui/core";

const SideBarButton = ({ classes, buttonProperty }) => {
  return (
    <>
      <a href="/" className={classes.sidebar__button}>
        <div className={classes.sidebar__button__icon}>
          {buttonProperty.buttonIcon}
        </div>
        <Typography
          variant="subtitle2"
          className={classes.sidebar__button__text}
        >
          {buttonProperty.buttonText}
        </Typography>
      </a>
    </>
  );
};

export default SideBarButton;
