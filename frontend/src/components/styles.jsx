import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 0,
  },

  body__container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  // header
  header__container: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    height: "50px",
    borderBottom: "1px solid #373737",
    boxShadow: "0px 1px 10px 1px #373737",
    zIndex: 1,
  },
  header__itemsleft__container: {
    display: "flex",
    width: "250px",
    flex: 1,
    alignItems: "center",
  },
  header__itemsright__container: {
    display: "flex",
    alignItems: "center",
  },
  header__brand: {
    padding: "10px 30px",
    marginLeft: "50%",
    marginRight: "5px",
    borderBottom: "2px solid #212121",
    color: "inherit",
    "&:hover": {
      backgroundColor: "#212121",
      borderBottom: "2px solid white",
    },
  },
  header__itemsright: {
    padding: "10px 15px",
    marginLeft: "5px",
    borderBottom: "2px solid #212121",
    color: "inherit",
    "&:hover": {
      backgroundColor: "#212121",
      borderBottomColor: "inherit",
    },
  },

  // main container = sidebar + main content
  main__container: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  // sidebar
  sidebar__container: {
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    width: "20%",
    boxShadow: "0.5px 0px 2px 0px #373737",
  },
  sidebar__button: {
    padding: "10px 7px",
    paddingLeft: "20px",
    marginBottom: "5px",
    display: "flex",
    textDecoration: "none",
    // borderRight: "2px solid #212121",
    color: "inherit",
    "&:hover": {
      backgroundColor: "#212121",
      // borderRightColor: "white",
    },
  },
  sidebar__subbutton: {
    padding: "7px 5px",
    paddingLeft: "50px",
    marginBottom: "5px",
    display: "flex",
    textDecoration: "none",
    // borderRight: "2px solid #212121",
    color: "inherit",
    "&:hover": {
      backgroundColor: "#212121",
      // borderRightColor: "inherit",
    },
  },
  sidebar__button__icon: {
    display: "flex",
    justifyContent: "center",
    top: "50%",
  },
  sidebar__button__text: {
    paddingTop: "2px",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "center",
    top: "50%",
  },

  // content
  maincontent__container: {
    padding: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));
