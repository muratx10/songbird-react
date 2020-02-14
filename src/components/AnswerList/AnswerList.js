import React from 'react';
import PropTypes from 'prop-types';
import './AnswerList.scss';
import birdsData from '../../data/birds-data';

const AnswerList = ({ section, selectAnswer }) => {
  const items = birdsData[section].map((el) => (
    <li
      className="answer-item"
      key={el.id}
      onClick={(e) => selectAnswer(el.id, e)}
    >
      <span className="radioBtn" />
      {el.name}
    </li>
  ));

  return (
    <ul className="answer-list">
      {items}
    </ul>
  );
};

AnswerList.propTypes = {
  section: PropTypes.number.isRequired,
  selectAnswer: PropTypes.func.isRequired,
};

export default AnswerList;
