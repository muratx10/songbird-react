import React from 'react';
import PropTypes from 'prop-types';
import './Subtitle.scss';

const Subtitle = ({ subtitle }) => (
  <p className="subtitle">
    {subtitle}
  </p>
);

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
