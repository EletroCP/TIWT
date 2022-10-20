import React from 'react';
import HowToPlayInfos from '../utils/HowToPlayInfos';

const HowToPlay = () => {
  return (
    <span aria-label="How To Play">
      <h1> How To Play WITW? </h1>
      <p>{ HowToPlayInfos[0].text }</p>
      { !HowToPlayInfos[0].img ? (
        <img src={HowToPlayInfos[0].img} alt="image" />
      ) : (
        null
      ) }
    </span>
  );
};

export default HowToPlay;