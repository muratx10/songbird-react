import React from 'react';
import PropTypes from 'prop-types';
import './Description.scss';

const Description = ({ text }) => (
  <p className="description">
    {text}
  </p>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
