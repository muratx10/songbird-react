import React from 'react';
import PropTypes from 'prop-types';
import './Subtitle.scss';

const Subtitle = ({ subtitle }) => (
  <p className="subtitle ml-2">
    {subtitle}
  </p>
);

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
