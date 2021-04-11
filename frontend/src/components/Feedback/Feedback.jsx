import React, { useState } from "react";
import { useSnackbar } from "notistack";

import { Button } from "@material-ui/core";

import { ContentTitle, ContentBody } from "../BodyTemplate";

const Feedback = ({ classes }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [feedback, setFeedback] = useState("");

  const handleSubmitFeedbackClick = (e) => {
    e.preventDefault();
    console.log({ feedback });
    enqueueSnackbar("Feedback submitted successfully", {
      variant: "success",
      preventDuplicate: true,
    });
  };

  const body = (
    <>
      <div className={classes.feedback__form__container}>
        <form onSubmit={handleSubmitFeedbackClick}>
          <div className={classes.feedback__form__element}>
            <textarea
              aria-label="feedback"
              rows="8"
              placeholder="Enter your feedback \ query here ..."
              className={classes.feedback__form__textarea}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <div className={classes.feedback__form__element}>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );

  return (
    <>
      <ContentTitle classes={classes} child={"Feedback  Queries"} />
      <ContentBody classes={classes} child={body} />
    </>
  );
};

export default Feedback;
