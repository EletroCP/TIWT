import React from 'react';
import Header from '../components/Header';

const MainPage = () => {
  return(
    <div>
      <Header />
      <input type="text" placeholder="Your name" />
      <label>
        Select game Type:
        <button>One Word</button>
        <button>Two Words</button>
        <button>Three Words</button>
      </label>
      <button>Start</button>
      <button>How To Play</button>
    </div>
  )
}

export default MainPage;