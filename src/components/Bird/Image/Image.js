import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ image, alt }) => (
  <div className="bird-img">
    <img alt={alt} src={image} width="200px" />
  </div>
);

Image.defaultProps = {
  alt: 'Bird image',
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
