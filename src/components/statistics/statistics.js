import React from "react";
const Statistic = ({ good, neutral, bad, total, positive }) => (
  <div className="Statistics">
    <h2>Statistics</h2>
    <div>
      <p className="statistics-value">Good: {good}</p>
      <p className="statistics-value">Neutral: {neutral}</p>
      <p className="statistics-value">Bad: {bad}</p>
      <p className="statistics-value">Total: {total}</p>
      <p className="statistics-value">Positive feedback: {positive}%</p>
    </div>
  </div>
);

export default Statistic;
