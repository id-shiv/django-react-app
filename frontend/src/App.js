import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import styles
import "./assets/css/custom.css"
import "./assets/css/index.css"

// import custom styles
import useStyles from "./components/styles"

// import components
import { Paper , CssBaseline} from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import { SnackbarProvider } from 'notistack';

// import custom components
import Layout from "./components/Components/Layout"

function App() {
  // import styles for render
  const classes = useStyles();

  // define theme
  const theme = createMuiTheme({
    palette: {
      type:"dark",
      primary: {
        main: "#bbdefb",
        dark: "#373737",
        color: "#ffffff",
        contrastText: "#000000",
      },
    },
    props: {
      MuiFormControl: {
        fullWidth: true,
      },
    },
  });

  // render App
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
              <SnackbarProvider
                xs="true"
                hideIconVariant={false}
                maxSnack={3} 
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }
              }
            TransitionComponent={Slide}>
                {/* paper component can import the theme */}
                <Paper style={{ height: "100vh" }} elevation={0} square>
                  {/* add common rules (such as box sizing with below component) */}
                  <CssBaseline />
                  <Layout classes={classes} />
                </Paper>
              </SnackbarProvider>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
