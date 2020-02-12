import React from 'react';
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

export default AnswerList;
