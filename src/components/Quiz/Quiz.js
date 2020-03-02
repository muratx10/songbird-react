import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Title from '../Bird/Title';
import Audio from '../Bird/Audio';
import Image from '../Bird/Image';
import '../../index.scss';
import birdsData from '../../data/birds-data';
import unknownBird from '../../assets/bird.jpg';

export default class Quiz extends Component {
  render() {
    const { win, section, randomID } = this.props;
    const alt = win ? birdsData[section][randomID].name : null;
    const imgSrc = win ? birdsData[section][randomID].image : unknownBird;
    const title = win ? birdsData[section][randomID].name : '*********';
    return (
      <>
        <Col lg={4} md={4} sm={12} xs={12} className="d-flex justify-content-center">
          <Image image={imgSrc} alt={alt} />
        </Col>
        <Col className="text-center justify-content-center" lg={8} md={8} sm={12} xs={12}>
          <Row className="justify-content-sm-center justify-content-md-start centered">
            <Title title={title} />
          </Row>
          <Row className="justify-content-sm-center justify-content-md-start centered">
            <Audio src={birdsData[section][randomID].audio} />
          </Row>
        </Col>
      </>
    );
  }
}

Quiz.propTypes = {
  win: PropTypes.bool.isRequired,
  section: PropTypes.number.isRequired,
  randomID: PropTypes.number.isRequired,
};
