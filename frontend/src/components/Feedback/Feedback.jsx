import React from "react";

import { Button, TextareaAutosize, FormControl } from "@material-ui/core";

import { ContentTitle, ContentBody } from "../BodyTemplate";

const Feedback = ({ classes }) => {
  const feedbackBody = (
    <>
      <div className={classes.feedback__form__container}>
        <FormControl>
          <div className={classes.feedback__form__element}>
            <TextareaAutosize
              aria-label="feedback"
              rowsMin={8}
              placeholder="Enter your feedback \ query here ..."
              className={classes.feedback__form__textarea}
            />
          </div>

          <div className={classes.feedback__form__element}>
            <Button color="primary" variant="contained">
              Submit
            </Button>
          </div>
        </FormControl>
      </div>
    </>
  );
  return (
    <>
      <ContentTitle classes={classes} child={"Feedback  Queries"} />
      <ContentBody classes={classes} child={feedbackBody} />
    </>
  );
};

export default Feedback;
