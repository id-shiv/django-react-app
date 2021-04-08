import React from "react";

import { Typography } from "@material-ui/core";

const SideBarButton = ({ classes, buttonProperty }) => {
  return (
    <>
      <a href="/" className={classes.sideBarButton}>
        <div className={classes.sideBarButtonIcon}>
          {buttonProperty.buttonIcon}
        </div>
        <Typography variant="subtitle2" className={classes.sideBarButtonText}>
          {buttonProperty.buttonText}
        </Typography>
      </a>
    </>
  );
};

export default SideBarButton;
