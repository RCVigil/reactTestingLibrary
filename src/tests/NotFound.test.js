import React from 'react';

import { screen } from '@testing-library/react';

import NotFound from '../pages/NotFound';

import renderWithRouter from './RenderwithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not', () => {
    renderWithRouter(<NotFound />);

    const componentNFound = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });

    expect(componentNFound).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const componentImage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    const imageSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    console.log(imageSrc);

    // expect(componentImage).toBeInTheDocument();
    expect(componentImage).toHaveAttribute('src', imageSrc);
  });
});
