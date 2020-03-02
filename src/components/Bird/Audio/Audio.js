import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ src }) => (
  <div className="audioplayer ml-2">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <audio src={src} controls preload="auto" />
  </div>
);

Audio.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Audio;
