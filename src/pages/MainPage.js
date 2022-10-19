import React from 'react';
import Header from '../components/Header';
import HowToPlay from '../components/HowToPlay';

const MainPage = () => {
  return(
    <div>
      <Header />
      <input
        type="text"
        placeholder="Your name"
        data-testid="username-input"
        aria-label="user-name"
      />
      <label>
        Select game Type:
        <button
          type="button"
          aria-label="One Word"
        >
          One Word
        </button>
        <button
          type="button"
          aria-label="Two Words"
        >
          Two Words
        </button>
        <button
          type="button"
          aria-label="One Word"
        >
          Three Words
        </button>
      </label>
      <button
        type="button"
        aria-label="Start"
      >
        Start
      </button>
      <button
        type="button"
        aria-label="How to play"
      >
        How To Play
      </button>
      <HowToPlay />
    </div>
  )
}

export default MainPage;