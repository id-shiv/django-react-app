import React from "react";

import { Modal } from "@material-ui/core";
import ReactImage from "../../assets/media/about/react.png";
import PythonDjangoImage from "../../assets/media/about/django.png";
import MUIImage from "../../assets/media/about/mui.svg";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const About = ({ classes }) => {
  const [modalShown, toggleModal] = React.useState(true);

  return (
    <Modal
      shown={modalShown}
      close={() => {
        toggleModal(false);
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      outline="none"
      className={classes.aboutContainer}
    >
      <div className={classes.aboutContainer}>
        <div className={classes.aboutVersionContainer}>
          <h3>Version: 0.0.1</h3>
          <p>Copyright | All Rights Reserved</p>
        </div>
        <div className={classes.aboutComponentContainer}>
          <div className={classes.aboutComponentImageContainer}>
            <img
              src={ReactImage}
              alt="REACT"
              className={classes.aboutComponentImage}
            />
          </div>
          <div className={classes.aboutComponentImageContainer}>
            <img
              src={PythonDjangoImage}
              alt="Python DJANGO"
              className={classes.aboutComponentImage}
            />
          </div>
          <div className={classes.aboutComponentImageContainer}>
            <img
              src={MUIImage}
              alt="Material UI"
              className={classes.aboutComponentImage}
            />
          </div>
        </div>
        <button
          onClick={() => {
            toggleModal(!modalShown);
          }}
          className={classes.aboutCloseButtonContainer}
        >
          <CancelPresentationIcon className={classes.aboutCloseButton} />
        </button>
      </div>
    </Modal>
  );
};

export default About;
