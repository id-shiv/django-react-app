import React from "react";

import ContentTitle from "../Components/ContentTitle";
import ContentBody from "../Components/ContentBody";
import UnderConstruction from "../Components/UnderConstruction";

const Settings = ({ classes }) => {
  const body = <UnderConstruction classes={classes} />;

  return (
    <>
      <ContentTitle classes={classes} child={"Settings"} />
      <ContentBody classes={classes} child={body} />
    </>
  );
};

export default Settings;
