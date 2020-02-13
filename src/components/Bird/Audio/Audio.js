import React from 'react';
import './Audio.scss';

const Audio = ({ src }) => (
  <div className="audioplayer">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <audio src={src} controls />
  </div>
);

export default Audio;
