import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import GamePage from '../pages/GamePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/main" /> } />
        <Route path="/main" element={ <MainPage /> } />
        <Route path="/game" element={ <GamePage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
