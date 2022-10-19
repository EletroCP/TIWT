import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/main" /> } />
          <Route path="/main" element={ <MainPage /> } />
        </Routes>
      </BrowserRouter>
    )
};

export default Router;
