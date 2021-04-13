import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Feedback from "../Feedback/Feedback";
import Notifications from "../Application/Notifications";
import Settings from "../Application/Settings";

// import custom components
import { Header, SideBar, RightBar } from "./";

export default function BodyTemplate({ classes }) {
  return (
    <>
      <div className={classes.header__container}>
        <Header classes={classes} />
      </div>
      <div className={classes.main__container}>
        <div className={classes.sidebar__container}>
          <SideBar classes={classes} />
        </div>

        <div id="main__content" className={classes.maincontent__container}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home classes={classes} />
              </Route>
              <Route path="/about">
                <About classes={classes} />
              </Route>
              <Route path="/feedback">
                <Feedback classes={classes} />
              </Route>
              <Route path="/notifications">
                <Notifications classes={classes} />
              </Route>
              <Route path="/settings">
                <Settings classes={classes} />
              </Route>
            </Switch>
          </Router>
        </div>

        <div className={classes.rightbar__container}>
          <RightBar classes={classes} />
        </div>
      </div>
    </>
  );
}
