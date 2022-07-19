import React from 'react';

import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const LinkComponentH = screen.getByRole('link', {
      name: /Home/i,
    });

    const LinkComponentA = screen.getByRole('link', {
      name: /About/i,
    });

    const LinkComponentF = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });
    expect(LinkComponentH).toBeInTheDocument();
    expect(LinkComponentA).toBeInTheDocument();
    expect(LinkComponentF).toBeInTheDocument();
  });
});
