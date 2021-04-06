import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import styles
import "./assets/css/custom.css"
import "./assets/css/index.css"

// import components
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';
import { SnackbarProvider } from 'notistack';

// import custom components
import { Layout } from "./components/"

function App() {
  // define theme
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  })

  // render App
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <ThemeProvider theme={theme}>
            <SnackbarProvider 
              maxSnack={3} 
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }
            }
          TransitionComponent={Slide}>
              <Layout />
            </SnackbarProvider>
          </ThemeProvider>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
