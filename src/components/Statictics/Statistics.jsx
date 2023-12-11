import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <p className={css.statistic}>Good: {good}</p>
    <p className={css.statistic}>Neutral: {neutral}</p>
    <p className={css.statistic}>Bad: {bad}</p>

    <p className={css.statistic}>Total Feedback: {total}</p>
    <p className={css.statistic}>
      Positive Feedback: {positivePercentage.toFixed(0)}%
    </p>
  </div>
);
