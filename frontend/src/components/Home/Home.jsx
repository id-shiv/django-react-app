import React from "react";

import { ContentTitle, ContentBody } from "../BodyTemplate";

const Home = ({ classes }) => {
  const body = <h5>Home Page Content</h5>;
  return (
    <>
      <ContentTitle classes={classes} title="Home Page Title" />
      <ContentBody classes={classes} body={body} />
    </>
  );
};

export default Home;
