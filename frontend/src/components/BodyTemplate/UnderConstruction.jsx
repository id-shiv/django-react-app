import React from "react";

import UnderConstructionImage from "../../assets/media/others/underconstruction.jpeg";

const UnderConstruction = ({ classes }) => {
  return (
    <img
      src={UnderConstructionImage}
      alt="under construction"
      className={classes.under__construction}
    />
  );
};

export default UnderConstruction;
