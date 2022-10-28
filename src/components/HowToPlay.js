import React, { useState } from 'react';
import HowToPlayInfos from '../utils/HowToPlayInfos';
import PropTypes from 'prop-types';

const HowToPlay = ({ value: { visible, setVisible } }) => {
  const [changeTip, setChangeTip] = useState(0);

  const nextTip = () => {
    const lastTip = HowToPlayInfos.length - 1;
    if(changeTip === lastTip) {
      setChangeTip(0);
    } else setChangeTip((prevState) => prevState += 1);
  };

  const prevTip = () => {
    const lastTip = HowToPlayInfos.length - 1;
    if(changeTip === 0) {
      setChangeTip(lastTip);
    } else setChangeTip((prevState) => prevState -= 1);
  };

  return (
    <span className={ visible } aria-label="How To Play" data-testid="how-to-play">
      <button
        type="button"
        data-testid="close-span"
        onClick={ () =>
          setVisible(
            visible === 'visible' ? 'not-visible' : 'visible'
          )
        }
      >
        x
      </button>
      <div>
        <button
          type="button"
          onClick={ () => prevTip() }
        >
          {'<'}
        </button>
        <div>
          <h2> How To Play WITW? </h2>
          <p key={`text-${changeTip}`}>{ HowToPlayInfos[changeTip].text }</p>
          { !HowToPlayInfos[changeTip].img ? (
            <img 
              key={`image-${changeTip}`}
              src={HowToPlayInfos[changeTip].img}
              alt="image"
            />
          ) : (
            null
          ) }
        </div>
        <button
          type="button"
          onClick={ () => nextTip() }
        >
          {'>'}
        </button>
      </div>
    </span>
  );
};

export default HowToPlay;

HowToPlay.propTypes = {
  value: PropTypes.shape().isRequired
};