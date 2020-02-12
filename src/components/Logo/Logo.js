import React from 'react';
import './Logo.scss';

const Logo = ({ src }) => (
  <div className="logo">
    <img src={src} alt="SongBird App Logo" width="200px"/>
  </div>
);

export default Logo;
