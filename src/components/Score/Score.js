import React from 'react';
import './Score.scss';

const Score = ({ score }) => (
  <div className="score">
    Score:&nbsp;
    {score}
  </div>
);

export default Score;
