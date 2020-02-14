import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ src }) => (
  <div className="logo">
    <img src={src} alt="SongBird App Logo" width="200px"/>
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Logo;
