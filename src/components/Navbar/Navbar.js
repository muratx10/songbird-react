import React, {Component} from 'react';
import './Navbar.scss';


export default class NavBar extends Component {
  componentDidUpdate() {
    const section = document.querySelectorAll('.section');
    section.forEach((el, index) => {
      el.classList.remove('active');
      if (index === this.props.section) {
        el.classList.add('active');
      }
    });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className='section active'>Разминка</li>
          <li className='section'>Воробьиные</li>
          <li className='section'>Лесные птицы</li>
          <li className='section'>Певчие птицы</li>
          <li className='section'>Хищьные птицы</li>
          <li className='section'>Морские птицы</li>
        </ul>
      </nav>
    );
  }
}
