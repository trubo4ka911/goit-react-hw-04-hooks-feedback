import React from "react";
import "./feedback.css";

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className="Feedback">
    <h2>Please leave feedback</h2>
    <div>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  </div>
);

export default FeedbackOptions;
