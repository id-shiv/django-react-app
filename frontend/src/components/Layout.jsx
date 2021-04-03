import React from "react";

import { Container, Button } from "@material-ui/core";
import PersistentDrawerRight from "./Drawer";

const Layout = () => {
  return (
    <Container className="p-0 m-0" maxWidth="lg">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <PersistentDrawerRight />
    </Container>
  );
};

export default Layout;
