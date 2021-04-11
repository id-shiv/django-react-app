import React from "react";

import { Add as AddIcon } from "@material-ui/icons";

import ReactImage from "../../assets/media/about/react.png";
import PythonDjangoImage from "../../assets/media/about/django.png";
import MUIImage from "../../assets/media/about/mui.svg";
import JSImage from "../../assets/media/about/js.png";
import HTML5Image from "../../assets/media/about/html5.png";
import CSSImage from "../../assets/media/about/css.png";

import { ContentTitle, ContentBody } from "../BodyTemplate";

const About = ({ classes }) => {
  const body = (
    <div className={classes.about__container}>
      <div className={classes.about__details__container}>
        <p className={classes.about__details}>
          PROJECT OR is an attempt to assist teams with scripts, analysis and
          intelligence as a service with no dependencies.
        </p>
        <h2 className={classes.about__details}>Version: 0.0.1</h2>
        <p className={classes.about__details}>
          Copyright | All Rights Reserved
        </p>
      </div>

      <div className={classes.about__component__container}>
        <img
          src={ReactImage}
          alt="REACT"
          className={classes.about__component}
        />
        <AddIcon className={classes.about__plus} />
        <img src={JSImage} alt="JS" className={classes.about__component} />
        <AddIcon className={classes.about__plus} />
        <img
          src={MUIImage}
          alt="Material UI"
          className={classes.about__component}
        />
        <AddIcon className={classes.about__plus} />
        <img
          src={PythonDjangoImage}
          alt="Python DJANGO"
          className={classes.about__component}
        />
      </div>

      <div className={classes.about__component__container}>
        <img src={HTML5Image} alt="HTML" className={classes.about__component} />
        <AddIcon className={classes.about__plus} />
        <img src={CSSImage} alt="CSS" className={classes.about__component} />
      </div>
    </div>
  );

  return (
    <>
      <ContentTitle classes={classes} title="About" />
      <ContentBody classes={classes} body={body} />
    </>
  );
};

export default About;
