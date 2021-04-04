import { Grid, Paper } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';

import { SnackbarProvider } from 'notistack';

import Layout from '../components/Layout/LayoutComponent'

function App() {
  // define theme
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  })

  // render App
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }
      }
    TransitionComponent={Slide}>
        <Paper style={{ height: "100vh" }}>
          <Grid container direction="column">
            <Layout theme={theme} />
          </Grid>
        </Paper>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
