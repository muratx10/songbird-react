import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EndGame.scss';
import Button from '../generic/Button';

export default class EndGame extends Component {
  render() {
    const { endGame, score, action, win } = this.props;
    const winner = `ПОЗДРАВЛЯЕМ, ВЫ ВЫИГРАЛИ СО СЧЕТОМ ${score} из 30!`;
    const elem = endGame ? winner : null;

    return (
      <div className="end-game">
        {elem}
        <Button
          label="Начать новую игру"
          endGame={endGame}
          action={action}
        />
      </div>
    );
  }
}

EndGame.propTypes = {
  endGame: PropTypes.bool.isRequired,
};
