import React from 'react';

import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from '../App';

import renderWithRouter from './RenderwithRouter';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import pokemons from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const EcountH2 = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });

    expect(EcountH2).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    renderWithRouter(<App />);

    const buttonNextPok = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    expect(buttonNextPok).toBeInTheDocument();

    const cardAtual = screen.getByTestId('pokemon-name');
    expect(cardAtual).toHaveTextContent(/Pikachu/i);

    userEvent.click(buttonNextPok);
    expect(cardAtual).not.toHaveTextContent(/Pikachu/i);
  });

  test('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const todosPokemons = pokemons.map((elem) => elem.type);

    const pokemonUnico = [...new Set(todosPokemons)];

    const contagem = pokemonUnico.length;

    const todosBotoes = screen.getAllByTestId(/pokemon-type-button/i);

    expect(todosBotoes).toHaveLength(contagem);

    pokemonUnico.forEach((elem, ind) => {
      expect(todosBotoes[ind]).toHaveTextContent(elem);
    });
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
    const cardAtual = screen.getByTestId('pokemon-name');
    expect(cardAtual).toHaveTextContent(/Pikachu/i);
  });
});
