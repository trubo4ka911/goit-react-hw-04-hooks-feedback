import React from "react";
import propTypes from "prop-types";
import { FeedbackBtn } from "./feedback.styled";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <FeedbackBtn
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </FeedbackBtn>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
