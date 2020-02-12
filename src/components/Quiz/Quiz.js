import React from 'react';
import Title from '../Bird/Title';
import Audio from '../Bird/Audio';
import Image from '../Bird/Image';
import './Quiz.scss';
import birdsData from '../../data/birds-data';
import unknownBird from '../../assets/bird.jpg';


const Quiz = ({ win, section, randomID }) => {
  const alt = win ? birdsData[section][randomID].name : null;
  const imgSrc = win ? birdsData[section][randomID].image : unknownBird;
  const title = win ? birdsData[section][randomID].name : '*********';
  return (
    <div className="quiz">
      <Image image={imgSrc} alt={alt} />
      <div className="bird-info">
        <Title title={title} />
        <Audio audio={birdsData[section][randomID].audio} />
      </div>
    </div>
  );
};

export default Quiz;
