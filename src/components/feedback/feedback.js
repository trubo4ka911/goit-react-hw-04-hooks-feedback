import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistic from "../statistics/statistics";

// import PropTypes from "prop-types";

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
  onBtnClickGood = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  onBtnClickNeutral = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onBtnClickBad = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };
  render() {
    const totalNumber = this.totalFeedback();

    return (
      <>
        <FeedbackOptions
          onGood={this.onBtnClickGood}
          onNeutral={this.onBtnClickNeutral}
          onBad={this.onBtnClickBad}
        />

        {totalNumber ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
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
// Feedback.propTypes = {};

export default Feedback;
