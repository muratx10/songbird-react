import React from 'react';
import PropTypes from 'prop-types';
import './AudioSwitcher.scss';

const AudioSwitcher = ({ isMuteOn, mute }) => {
  const className = isMuteOn ? 'muteBtn muteOn' : 'muteBtn';
  return (
    <div>
      <span
        className={className}
        onClick={mute}
      >
        &#128266;
      </span>
    </div>
  );
};

AudioSwitcher.propTypes = {
  isMuteOn: PropTypes.bool.isRequired,
  mute: PropTypes.func.isRequired,
};

export default AudioSwitcher;
