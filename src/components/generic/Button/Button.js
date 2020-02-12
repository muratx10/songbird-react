import React from 'react';
import './Button.scss';

const Button = ({ label }) => (
  <button className="button level" type="button">
    {label}
  </button>
);

export default Button;
