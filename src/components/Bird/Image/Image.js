import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';
import './Image.scss';


const Image = ({ image, alt }) => (
  <Figure className="bird-img">
    <Figure.Image width="200px" src={image} alt={alt}>
    </Figure.Image>
  </Figure>
);

Image.defaultProps = {
  alt: 'Bird image',
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
