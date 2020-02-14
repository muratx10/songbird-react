import React, { Component } from 'react';
import './App.scss';
import Logo from '../Logo';
import Score from '../Score';
import AnswerList from '../AnswerList';
import Details from '../Bird/Details';
import Button from '../generic/Button';
import NavBar from '../Navbar';
import Quiz from '../Quiz';
import logo from '../../assets/logo.svg';
import EndGame from '../EndGame';
import fail from '../../assets/sounds/fail.mp3';
import success from '../../assets/sounds/success.mp3';
import AudioSwitcher from '../AudioSwitcher';

export default class App extends Component {

  state = {
    section: 0,
    randomID: 0,
    selectedID: 0,
    selected: false,
    score: 0,
    attempt: 0,
    win: false,
    endGame: false,
    isMuteOn: false,
  };

  componentDidMount() {
    this.setState({
      randomID: this.random()
    });
  };

  selectAnswer = (id, e) => {
    e.persist();
    this.setState({
      selectedID: id - 1,
      selected: true
    });
    const correct = e.target.children[0].classList.contains('correct');
    const incorrect = e.target.children[0].classList.contains('incorrect');
    if (!correct && !incorrect) {
      this.setState((state) => ({
        attempt: state.attempt + 1
      }));
    }
    this.checkAnswer(id);
    this.styleAnswer(e);
  };

  checkAnswer = (id) => {
    this.fail = new Audio(fail);
    this.success = new Audio(success);
    if (id - 1 !== this.state.randomID || this.state.win) {
      if(!this.state.isMuteOn && !this.state.win) this.fail.play();
        return;
    }
    document.querySelectorAll('audio').forEach((item) => {
      item.pause();
      if(!this.state.isMuteOn && !this.state.win) this.success.play();
    });
    this.setState((state) => ({
      score: state.score + 5 - this.state.attempt,
      win: true
    }));
  };

  styleAnswer = (e) => {
    if (e._targetInst.key - 1 === this.state.randomID && !this.state.win) {
      e.target.children[0].classList.add('correct');
    } else if (e._targetInst.key - 1 !== this.state.randomID && !this.state.win) {
      e.target.children[0].classList.add('incorrect');
    }
  };

  resetStyle = () => {
    const el = document.querySelectorAll('.radioBtn');
    el.forEach((item) => {
      item.className = 'radioBtn';
    })
  };

  nextLevel = () => {
    if (!this.state.win) return true;
    if (this.state.section === 5) {
      this.setState({
        section: -1,
        endGame: true,
        win: false
      });
      this.endGame();
    }
    this.setState((state) => ({
      attempt: 0,
      section: state.section + 1,
      win: false,
      selected: false,
      randomID: this.random(),
      selectedID: 0
    }));
    this.resetStyle();
  };

  random = () => {
    const n = Math.floor(Math.random() * 6);
    console.log(`Правильный ответ: ${n + 1}`);
    return n;
  };

  endGame = () => {
    const content = document.querySelector('.content');
    content.style.display = 'none';
  };

  startNewGame = () => {
    const content = document.querySelector('.content');
    const winner = document.querySelector('.end-game');
    content.style.display = 'grid';
    winner.style.display = 'none';
    this.setState({
      score: 0,
      endGame: false,
    })
  };
  mute = () => {
    this.setState((state) => ({
      isMuteOn: !state.isMuteOn
    }))
  };

  render() {
    const endGameComp = (
      <EndGame
        endGame={this.state.endGame}
        score={this.state.score}
        action={this.startNewGame}
      />
    );
    const end = this.state.endGame ? endGameComp : null;
    return (
      <>
        <Logo src={logo} />
        <AudioSwitcher
          isMuteOn={this.state.isMuteOn}
          mute={this.mute} />
        <Score score={this.state.score} />
        <main className="content">
          <NavBar section={this.state.section} />
          <Quiz
            section={this.state.section}
            randomID={this.state.randomID}
            win={this.state.win}
          />
          <AnswerList
            section={this.state.section}
            selectAnswer={this.selectAnswer}
          />
          <Details
            selected={this.state.selected}
            section={this.state.section}
            id={this.state.selectedID}
          />
          <Button
            label="Следующий вопрос"
            win={this.state.win}
            action={this.nextLevel}
            reset={this.styleAnswer}
            selected={this.state.selected}
            endGame={this.state.endGame}
          />
        </main>
        {end}
      </>
    )
  }
}

