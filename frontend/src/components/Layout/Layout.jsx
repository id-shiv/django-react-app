import React from "react";

// import custom components
import { NavBar, SideBar } from "../../components";

export default function Layout({ classes }) {
  return (
    <>
      <SideBar classes={classes} />
      <NavBar classes={classes} />
    </>
  );
}
