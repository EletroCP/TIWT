import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HowToPlay from '../components/HowToPlay';
import { Context } from '../context/Context';
import '../style/mainPage.css';

const MainPage = () => {

  const { userName, typeGame, setUserName, setTypeGame } = useContext(Context);
  const [isDisabled, setIsDisabled] = useState(true);
  const [visible, setVisible] = useState('not-visible');

  return(
    <div>
      <Header />
      <input
        type="text"
        placeholder="Your name"
        data-testid="username-input"
        aria-label="user-name"
        value={ userName }
        onChange={ ({ target: { value } }) => {
          setUserName(value);
          if(value.length >= 3) return setIsDisabled(false);
          setIsDisabled(true);
        }}
      />
      <label>
        Select game Type:
        <button
          type="button"
          aria-label="One Word"
          data-testid="one-word-button"
          onClick={ () => setTypeGame(1) }
        >
          One Word
        </button>
        <button
          type="button"
          aria-label="Two Words"
          data-testid="two-word-button"
          onClick={ () => setTypeGame(2) }
        >
          Two Words
        </button>
        <button
          type="button"
          aria-label="Three Word"
          data-testid="three-word-button"
          onClick={ () => setTypeGame(3) }
        >
          Three Words
        </button>
        <p data-testid="number-of-words">
          Numero de palavras selecionadas: { typeGame }
        </p>
      </label>
      <Link to="/game">
        <button
          type="button"
          aria-label="Start"
          disabled={ isDisabled }
        >
          Start
        </button>
      </Link>
      <button
        type="button"
        aria-label="How to play"
        onClick={ () => {
          setVisible(
            visible === 'visible' ? 'not-visible' : 'visible'
          );
        }}
      >
        How To Play
      </button>
      <HowToPlay
        value={{
          visible
        }}
      />
    </div>
  );
};

export default MainPage;