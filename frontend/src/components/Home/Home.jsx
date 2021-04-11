import React from "react";

import { ContentTitle, ContentBody } from "../BodyTemplate";

const Home = ({ classes }) => {
  const body = <h5>Home Page Content</h5>;
  return (
    <>
      <ContentTitle classes={classes} child={"Home Page Title"} />
      <ContentBody classes={classes} child={body} />
    </>
  );
};

export default Home;
