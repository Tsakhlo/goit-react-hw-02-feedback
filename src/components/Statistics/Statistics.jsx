import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul>
    <li>Good: <span>{good}</span></li>
    <li>Neutral: <span>{neutral}</span></li>
    <li>Bad: <span>{bad}</span></li>
    <li>Total: <span>{total}</span></li>
    <li>Positive feedback : <span>{positivePercentage}%</span></li>
   </ul>
);

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.arrayOf(PropTypes.number),
    neutral: PropTypes.arrayOf(PropTypes.number),
    bad: PropTypes.arrayOf(PropTypes.number),
    total: PropTypes.arrayOf(PropTypes.number),
    positivePercentage: PropTypes.func
  }