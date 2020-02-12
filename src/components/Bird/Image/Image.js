import React from 'react';
import './Image.scss';

const Image = ({ image, alt }) => (
  <div className="bird-img">
    <img alt={alt} src={image} width="200px" />
  </div>
);

export default Image;
