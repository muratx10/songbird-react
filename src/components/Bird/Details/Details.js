import React from 'react';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Image from '../Image';
import Description from '../Description';
import Audio from '../Audio';
import './Details.scss';
import birdsData from '../../../data/birds-data';

const Details = ({ selected, id, section }) => {
  const styleTip = {
    display: selected ? 'none' : 'block',
  };

  const tip = (
    <p
      className="instruction"
      style={styleTip}
    >
      <span>Послушайте плеер.</span>
      <span>Выберите птицу из списка</span>
    </p>
  );

  const elem = (
    <div className="bird-details">
      <Image image={birdsData[section][id].image} />
      <Title title={birdsData[section][id].name} />
      <Subtitle subtitle={birdsData[section][id].species} />
      <Audio src={birdsData[section][id].audio} />
      <Description text={birdsData[section][id].description} />
    </div>
  );

  return (
    selected ? elem : tip
  );
};

export default Details;