import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistic from "../statistics/statistics";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };
  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  positiveFeedback = () => {
    return Math.floor((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalNumber = this.totalFeedback();

    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {totalNumber ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positive={this.positiveFeedback()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </>
    );
  }
}

export default Feedback;
