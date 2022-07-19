import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../pages';

describe('Teste o componente <About.js />', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const LinkComponentA = screen.getByText('About Pokédex');

    expect(LinkComponentA).toBeInTheDocument();
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const componentAbout = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });

    expect(componentAbout).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const imagePokedex = screen.queryByRole('img', { name: /pokédex/i });

    console.log(imagePokedex);

    expect(imagePokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
