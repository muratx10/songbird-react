import React, {Component} from 'react';
import './App.scss';
import Logo from '../Logo';
import Score from '../Score';
import AnswerList from '../AnswerList';
import Details from '../Bird/Details';
import Button from '../generic/Button';
import NavBar from '../Navbar';
import Quiz from '../Quiz';
import logo from '../../assets/logo.svg';

export default class App extends Component {

  state = {
    section: 0,
    randomID: 0,
    selectedID: 0,
    selected: false,
    score: 0,
    attempt: 0,
    win: false,
  };

  componentDidMount() {
    this.setState({
      randomID: this.random()
    })
  };

  selectAnswer = (id, e) => {
    e.persist();
    this.setState({
      selectedID: id - 1,
      selected: true
    });
    if (!e.target.classList.contains('correct') && !e.target.classList.contains('incorrect')) {
      this.setState((state) => ({
        attempt: state.attempt + 1
      }));
    }
    this.checkAnswer(id);
    this.styleAnswer(e);
  };

  checkAnswer = (id) => {
    if (id - 1 !== this.state.randomID || this.state.win) return;
    this.setState((state) => ({
      score: state.score + 5 - this.state.attempt,
      win: true
    }))
  };

  styleAnswer = (e) => {
    if(e._targetInst.key - 1 === this.state.randomID && !this.state.win) {
      console.log(e.target.children[0]);
      e.target.children[0].classList.add('correct')
    } else if(e._targetInst.key - 1 !== this.state.randomID && !this.state.win) {
      e.target.children[0].classList.add('incorrect')
    }
  };

  random = () => {
    return Math.floor((Math.random() * 6) + 1);
  };

  render() {
    return (
      <>
        <Logo src={logo}/>
        <Score score={this.state.score}/>
        <main className="content">
          <NavBar/>
          <Quiz
            section={this.state.section}
            randomID={this.state.randomID}
            win={this.state.win}
          />
          <AnswerList section={this.state.section}
                      selectAnswer={this.selectAnswer}/>
          <Details
            selected={this.state.selected}
            section={this.state.section}
            id={this.state.selectedID}
          />
          <Button label="Next level"/>
        </main>
      </>
    )
  }
}

