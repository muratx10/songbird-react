import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EndGame.scss';

export default class EndGame extends Component {
  render() {
    const { endGame } = this.props;
    const elem = endGame ? 'CONGRATS' : 'ПОЗДРАВЛЯЕМ!';

    return (
      <div className="end-game">
        {elem}
      </div>
    );
  }
}

EndGame.propTypes = {
  endGame: PropTypes.bool.isRequired,
};
