import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';


export default class NavBar extends Component {
  componentDidUpdate() {
    const sections = document.querySelectorAll('.section');
    const { section } = this.props;
    sections.forEach((el, index) => {
      el.classList.remove('active');
      if (index === section) {
        el.classList.add('active');
      }
    });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="section active">Разминка</li>
          <li className="section">Воробьиные</li>
          <li className="section">Лесные птицы</li>
          <li className="section">Певчие птицы</li>
          <li className="section">Хищьные птицы</li>
          <li className="section">Морские птицы</li>
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  section: PropTypes.number.isRequired,
};
