import { Grid, Typography, Paper } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

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
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Layout />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
