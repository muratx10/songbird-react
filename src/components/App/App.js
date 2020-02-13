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
import Data from '../../data';
import EndGame from '../EndGame';

export default class App extends Component {

  state = {
    section: 0,
    randomID: 0,
    selectedID: 0,
    selected: false,
    score: 0,
    attempt: 0,
    win: false,
    endGame: false
  }

  componentDidMount() {
    this.setState({
      randomID: this.random()
    });
  }

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
  }

  checkAnswer = (id) => {
    if (id - 1 !== this.state.randomID || this.state.win) return;
    document.querySelectorAll('audio').forEach((item) => {
      item.pause();
    });
    this.setState((state) => ({
      score: state.score + 5 - this.state.attempt,
      win: true
    }))
  }

  styleAnswer = (e) => {
    if (e._targetInst.key - 1 === this.state.randomID && !this.state.win) {
      e.target.children[0].classList.add('correct');
    } else if (e._targetInst.key - 1 !== this.state.randomID && !this.state.win) {
      e.target.children[0].classList.add('incorrect');
    }
  }

  resetStyle = () => {
    const el = document.querySelectorAll('.radioBtn');
    el.forEach((item) => {
      item.className = 'radioBtn';
    })
  }

  nextSection = () => {
    if (!this.state.win) return true;
    if (this.state.section === 5) {
      this.setState({
        section: -1,
        endGame: true
      });
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
  }

  random = () => {
    const n = Math.floor(Math.random() * 6);
    console.log(`Правильный ответ: ${n + 1}`);
    return n;
  }

  endGame = () => {

  }

  render() {
    const className = this.state.endGame ? 'content blur' : 'content';

    return (
      <>
        <Logo src={logo} />
        <Score score={this.state.score} />
        <EndGame
          endGame={this.state.endGame}
          score={this.state.score}
        />
        <main className={className}>
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
            nextSection={this.nextSection}
            reset={this.styleAnswer}
            selected={this.state.selected}
            endGame={this.state.endGame}
          />
        </main>
      </>
    )
  }
}

