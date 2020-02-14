import React from 'react';
import PropTypes from 'prop-types';
import './Audio.scss';

const Audio = ({ src }) => (
  <div className="audioplayer">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <audio src={src} controls />
  </div>
);

Audio.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Audio;
