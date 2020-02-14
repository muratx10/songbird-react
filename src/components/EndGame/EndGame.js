import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EndGame.scss';
import Button from '../generic/Button';

export default class EndGame extends Component {
  render() {
    const { endGame, score, action } = this.props;
    let winner = '';
    if (score === 30) {
      winner = 'УХ ТЫ, ЛИБО ВАМ ПОВЕЗЛО, ЛИБО ВЫ ЗНАТНЫЙ ЗНАТОК ПТИЧЕК! '
        + 'ВЫ НАБРАЛИ 30 баллов из 30 🥇 🤯'
        + 'ПОПРОБУЕМ ЕЩЕ РАЗ? 🤪';
    } else if (score < 30 && score > 6) {
      winner = `ПОЗДРАВЛЯЕМ, ВЫ ВЫИГРАЛИ СО СЧЕТОМ ${score} из 30! 💪`;
    } else if (score < 7) {
      winner = `ПТИЧНИК ВЫ ТАК СЕБЕ, ВЫ НАБРАЛИ ВСЕГО ${score} из 30 😕`;
    }
    const Btn = (
      <Button
        label="Начать новую игру"
        endGame={endGame}
        action={action}
      />
    );
    const elem = endGame ? winner : null;
    const btn = endGame ? Btn : null;

    return (
      <div className="end-game">
        {elem}
        {btn}
      </div>
    );
  }
}

EndGame.propTypes = {
  endGame: PropTypes.bool,
};
