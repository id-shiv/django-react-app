import React from "react";

import { ContentTitle, ContentBody } from "../BodyTemplate";
import UnderConstruction from "../BodyTemplate/UnderConstruction";

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
