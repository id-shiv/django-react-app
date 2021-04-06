import React from "react";
import { withStyles } from "@material-ui/core";

const style = {
  sideBarContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "300px",
    height: "100%",
    backgroundColor: "lightgrey",
  },
  sideBar: {
    marginTop: "70px",
    backgroundColor: "black",
  },
};

const SideBar = (props) => {
  // get classes from props that is exported with the function
  const { classes } = props;
  return (
    <div className={classes.sideBarContainer}>
      <div className={classes.sideBar}>test</div>
    </div>
  );
};

export default withStyles(style)(SideBar);
