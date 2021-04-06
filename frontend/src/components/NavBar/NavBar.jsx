import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import components
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

// create styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  // import styles for render
  const classes = useStyles();

  return (
    <Container className={classes.navBar}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Django + React
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
