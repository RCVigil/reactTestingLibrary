import React from 'react';
import App from '../App';
import renderWithRouter from './RenderwithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
  });
});
