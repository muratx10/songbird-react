import React from 'react';
import PropTypes from 'prop-types';
import './Score.scss';

const Score = ({ score }) => (
  <div className="score">
    Счет:&nbsp;
    {score}
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
