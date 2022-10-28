import { fireEvent, render, screen } from '@testing-library/react';
import React, { useContext } from 'react';
import MainPage from '../pages/MainPage';
import renderWithRouter from './renderWithRouter';
import ContextProvider from '../context/Context'
import Router from '../components/Router';

describe('Testes da pagina inicial da aplicação', () => {
  const div = document.createElement('div');
  beforeEach(() => {
    renderWithRouter(
      <ContextProvider>
        <MainPage />
      </ContextProvider>
    , div);
  })
  it('Renderiza sem crashar', () => {});

  it('O titulo é visivel', () => {
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeVisible;
    expect(title).toHaveTextContent;
  })

  it('o input de nome é visivel', () => {
    const userNameInput = screen.getByRole('textbox');
    expect(userNameInput).toBeVisible;
    expect(userNameInput).not.toHaveTextContent;
  })

  it('o input de nome é acessivel', () => {
    const userNameInput = screen.getByRole('textbox');
    expect(userNameInput).toBeVisible;
    expect(userNameInput).not.toHaveTextContent;
    fireEvent.click(userNameInput, );
    fireEvent.change(userNameInput, { target: { value: "Claudio" } })
    expect(userNameInput).toHaveTextContent;
    expect(userNameInput.value).toEqual('Claudio')
  })

  it('Clicar nos botões altera a dificuldade', () => {
    const dificultButton1 = screen.getByTestId('one-word-button');
    const dificultButton2 = screen.getByTestId('two-word-button');
    const dificultButton3 = screen.getByTestId('three-word-button');
    const difficultyDial = screen.getByTestId('number-of-words');

    expect(difficultyDial).toHaveTextContent;
    expect(difficultyDial.innerHTML.slice(-1)).toEqual('1');
    fireEvent.click(dificultButton2);
    expect(difficultyDial.innerHTML.slice(-1)).toEqual('2');
    fireEvent.click(dificultButton3);
    expect(difficultyDial.innerHTML.slice(-1)).toEqual('3');
    fireEvent.click(dificultButton1);
    expect(difficultyDial.innerHTML.slice(-1)).toEqual('1');
  });

  it('Inicialmente o span de como jogar não está visivel', () => {
    const span = screen.getByTestId('how-to-play');
    expect(span).not.toBeVisible;
  });

  it('Ao clicar em "como jogar?" o span fica visivel', () => {
    const span = screen.getByTestId('how-to-play');
    const button = screen.getByTestId('open-htp');
    fireEvent.click(button);
    expect(span).toBeVisible;
  });

  it('Com o span aberto é possivel fecha-lo', () => {
    const span = screen.getByTestId('how-to-play');
    const closeSpan = screen.getByTestId('close-span')
    const button = screen.getByTestId('open-htp');
    fireEvent.click(button);
    expect(span).toBeVisible;
    fireEvent.click(closeSpan);
    expect(span).not.toBeVisible;
  })
});