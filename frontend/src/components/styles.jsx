import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  // header
  navBarContainer: {
    display: "flex",
    marginLeft: "250px",
    height: "50px",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navBarSearch: {
    marginLeft: "10px",
    padding: "10px",
    width: "400px",
    border: "none",
  },
  navBarInBetween: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  navBarItemsRight: {
    padding: "5px",
    margin: "0px 10px",
    borderBottom: "2px solid dimgrey",
    color: "inherit",
    "&:hover": {
      color: "dimgrey",
      borderBottom: "2px solid white",
    },
  },

  sideBarContainer: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    width: "250px",
    height: "100%",
    backgroundColor: "inherit",
  },
  sideBarTopBrand: {
    minHeight: "50px",
    width: "100%",
    position: "absolute",
    backgroundColor: "inherit",
    padding: "15px 50px 10px 60px",
    justifyContent: "center",
  },
  sideBarButtonGroup: {
    marginTop: "50px",
  },
  sideBarButton: {
    padding: "10px",
    margin: "10px 0px",
    display: "flex",
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      backgroundColor: "dimgrey",
    },
  },
  sideBarSubButton: {
    padding: "10px",
    margin: "5px 0px 5px 30px",
    display: "flex",
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      backgroundColor: "dimgrey",
    },
  },
  sideBarButtonIcon: {
    display: "flex",
    justifyContent: "center",
    top: "50%",
  },
  sideBarButtonText: {
    paddingTop: "2px",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "center",
    top: "50%",
  },
}));
