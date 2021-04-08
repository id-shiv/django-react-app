import React from "react";

import { Typography } from "@material-ui/core";

const SideBarSubButton = ({ classes, buttonProperty }) => {
  return (
    <>
      <a href="/" className={classes.sideBarSubButton}>
        <div className={classes.sideBarButtonIcon}>
          {buttonProperty.buttonIcon}
        </div>
        <Typography variant="caption" className={classes.sideBarButtonText}>
          {buttonProperty.buttonText}
        </Typography>
      </a>
    </>
  );
};

export default SideBarSubButton;
