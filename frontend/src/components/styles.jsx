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

  main__container: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  maincontent__container: {
    display: "flex",
    flexDirection: "column",
  },

  // header
  header__container: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    height: "50px",
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
  header__itemsright: {
    padding: "10px 15px",
    marginLeft: "5px",
    borderBottom: "2px solid dimgrey",
    color: "inherit",
    "&:hover": {
      color: "dimgrey",
      borderBottom: "2px solid white",
    },
  },
  header__brand: {
    padding: "10px 15px",
    borderBottom: "2px solid dimgrey",
    color: "inherit",
    "&:hover": {
      color: "dimgrey",
      borderBottom: "2px solid white",
    },
  },

  // sidebar
  sidebar__container: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
  },
  sidebar__button: {
    padding: "5px",
    margin: "5px 0px",
    display: "flex",
    textDecoration: "none",
    borderRight: "solid 2px dimgrey",
    color: "inherit",
    "&:hover": {
      backgroundColor: "dimgrey",
      borderRightColor: "inherit",
    },
  },
  sidebar__subbutton: {
    padding: "5px",
    margin: "3px 0px 5px 30px",
    display: "flex",
    textDecoration: "none",
    borderRight: "solid 2px dimgrey",
    color: "inherit",
    "&:hover": {
      backgroundColor: "dimgrey",
      borderRightColor: "inherit",
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

  // about
  aboutContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "400px",
    outline: "none",
    alignItems: "center",
    background: "rgba(119, 119, 119, 0.6)",
    animation: "modalSlide 0.5s ease-out forwards",
  },
  aboutVersionContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "40px",
  },
  aboutComponentContainer: {
    display: "flex",
    flex: 1,
    margin: "40px",
  },
  aboutComponentImageContainer: {
    padding: "20px",
    margin: "0px 30px",
    borderBottom: "solid 2px white",
  },
  aboutComponentImage: {
    width: "100px",
    height: "80",
    resizeMode: "contain",
  },
  aboutCloseButtonContainer: {
    width: "100px",
    height: "80px",
  },
  aboutCloseButton: {
    display: "block",
    margin: "auto",
  },

  // main container
  mainContainer: {
    marginLeft: "250px",
    marginTop: "50px",
  },
}));
