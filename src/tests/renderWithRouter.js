
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ContextProvider from '../context/Context';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <ContextProvider>
        <Router history={ history }>{component}</Router>
      </ContextProvider>
    ), history,
  });
};
export default renderWithRouter;