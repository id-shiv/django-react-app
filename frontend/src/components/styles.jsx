import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 0,
    color: "#373737",
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
    position: "sticky",
    height: "50px",
    borderBottom: "1px solid #373737",
    boxShadow: "0px 1px 10px 1px #373737",
    zIndex: 1,
  },
  header__brand: {
    padding: "12px 20px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    textDecoration: "none",
    borderBottom: "2px solid #212121",
    color: "inherit",
    "&:hover": {
      color: "#212121",
      backgroundColor: "#bbdefb",
      borderBottomColor: "#212121",
    },
  },

  // main container = sidebar + main content + rightbar
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
    width: "280px",
    boxShadow: "0.5px 0px 2px 0px #373737",
  },
  sidebar__button: {
    padding: "10px 7px",
    paddingLeft: "20px",
    marginBottom: "5px",
    display: "flex",
    textDecoration: "none",
    color: "inherit",
    borderRight: "2px solid #373737",
    "&:hover": {
      color: "#212121",
      backgroundColor: "#bbdefb",
      borderBottomColor: "#212121",
    },
  },
  sidebar__subbutton: {
    padding: "7px 5px",
    paddingLeft: "50px",
    marginBottom: "5px",
    display: "flex",
    textDecoration: "none",
    color: "inherit",
    borderRight: "2px solid #373737",
    "&:hover": {
      color: "#212121",
      backgroundColor: "#bbdefb",
      borderBottomColor: "#212121",
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

  // right bar
  rightbar__container: {
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    width: "50px",
    boxShadow: "0px -0.5px 2px 0px #373737",
  },
  rightbar__icon: {
    padding: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3px",
    borderLeft: "2px solid #373737",
    color: "inherit",
    justifyContent: "center",
    "&:hover": {
      color: "#212121",
      backgroundColor: "#bbdefb",
    },
  },

  // content
  maincontent__container: {
    padding: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  main__content__title: {
    padding: "5px",
    borderBottom: "1px solid #373737",
  },
  main__content__body: {
    padding: "10px",
  },

  // about
  about__container: {
    display: "flex",
    flexDirection: "column",
  },
  about__details__container: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "5px",
    borderBottom: "1px solid #373737",
  },
  about__details: {
    padding: "5px 0px",
  },
  about__component__container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  about__component: {
    padding: "10px",
    width: "150px",
    height: "150px",
    objectFit: "contain",
  },
  about__plus: {
    marginTop: "auto",
    marginBottom: "auto",
  },

  // feedback
  feedback__form__container: {
    marginTop: "30px",
  },
  feedback__form__textarea: {
    width: "100%",
  },
  feedback__form__element: {
    paddingBottom: "10px",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
