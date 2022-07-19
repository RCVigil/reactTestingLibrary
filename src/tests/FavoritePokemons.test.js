import React from 'react';

import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { FavoritePokemons } from '../pages';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    render(<BrowserRouter><FavoritePokemons /></BrowserRouter>);
    const notFavor = screen.getByText(/No favorite pokemon found/i);

    expect(notFavor).toBeInTheDocument();
  });
});
