import React from 'react';
import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [typeGame, setTypeGame] = useState(1);

  const value = useMemo(() => ({
    userName, setUserName,
    typeGame, setTypeGame,
  }), [userName, typeGame]);

  return (
    <Context.Provider
      value={ value }
    >
      { children }
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};