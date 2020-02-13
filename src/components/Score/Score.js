import React from 'react';
import './Score.scss';

const Score = ({ score }) => (
  <div className="score">
    Счет:&nbsp;
    {score}
  </div>
);

export default Score;
