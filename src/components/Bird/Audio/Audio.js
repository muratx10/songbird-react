import React from 'react';
import './Audio.scss';

const Audio = ({ audio }) => (
  <div className="audioplayer">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <audio src={audio} controls />
  </div>
);

export default Audio;
