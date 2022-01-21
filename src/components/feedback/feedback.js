import React from "react";
import { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistic from "../statistics/statistics";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (option) => {
    setFeedbacks((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };
  const totalFeedback = () => {
    return Object.values(feedbacks).reduce((acc, value) => acc + value, 0);
  };
  const positiveFeedback = () => {
    return Math.floor((feedbacks.good / totalFeedback()) * 100);
  };

  const { good, neutral, bad } = feedbacks;
  const options = Object.keys(feedbacks);
  const totalNumber = totalFeedback();

  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />

      {totalNumber ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positive={positiveFeedback()}
        />
      ) : (
        <p>There is no feedback</p>
      )}
    </>
  );
};

export default Feedback;
