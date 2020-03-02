import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({ title }) => (
  <p className="title mt-1 ml-2">
    {title}
  </p>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
