import React from "react";
import { Typography } from "@material-ui/core";

const ContentTitle = ({ classes, child }) => {
  return (
    <div className={classes.main__content__title}>
      <Typography component="h5" variant="h5">
        {child}
      </Typography>
    </div>
  );
};

export default ContentTitle;
