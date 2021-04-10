import React from "react";
// import { Switch, Route } from "react-router-dom";

// import custom components
import { Header, SideBar } from "./";

export default function BodyTemplate({ classes }) {
  return (
    <>
      <div className={classes.body__container}>
        <div className={classes.header__container}>
          <Header classes={classes} />
        </div>
        <div className={classes.main__container}>
          <div className={classes.sidebar__container}>
            <SideBar classes={classes} />
          </div>
          <div className={classes.maincontent__container}>Main Content</div>
        </div>
      </div>
    </>
  );
}
