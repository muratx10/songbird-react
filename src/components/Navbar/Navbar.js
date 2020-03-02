import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { Container, Row, Col } from 'react-bootstrap';


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
      <Container>
        <Row className="navbar">
          <Col className="section active" sm={4} xs={6} lg={2}>Разминка</Col>
          <Col className="section" sm={4} xs={6} lg={2}>Воробьиные</Col>
          <Col className="section" sm={4} xs={6} lg={2}>Лесные птицы</Col>
          <Col className="section" sm={4} xs={6} lg={2}>Певчие птицы</Col>
          <Col className="section" sm={4} xs={6} lg={2}>Хищьные птицы</Col>
          <Col className="section" sm={4} xs={6} lg={2}>Морские птицы</Col>
        </Row>
      </Container>
    );
  }
}

NavBar.propTypes = {
  section: PropTypes.number.isRequired,
};
