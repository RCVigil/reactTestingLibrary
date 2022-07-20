import React from 'react';

import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from '../App';

import renderWithRouter from './RenderwithRouter';
import pokemons from '../data';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações detalhadas do pokémon selecionado são mostradas', () => {
    renderWithRouter(<App />);

    const linkDet = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkDet);

    const nomePokemon = screen.getByRole('heading', {
      name: /pikachu details/i,
      level: 2,
    });

    expect(nomePokemon).toBeInTheDocument();

    const sumaryH2 = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });
    expect(sumaryH2).toBeInTheDocument();

    const locationH2 = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
      level: 2,
    });
    expect(locationH2).toBeInTheDocument();

    const sumaryParag = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them/i,
    );
    expect(sumaryParag).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo os locais', () => {
    renderWithRouter(<App />);

    const linkDet = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkDet);

    const localPokemon = pokemons.map((elem) => elem.foundAt);

    console.log(localPokemon);

    const mapsPok = localPokemon[0].length;

    const mapasImg = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';

    const addMapa = screen.getAllByAltText(/Pikachu location/i);

    expect(addMapa[0]).toHaveAttribute('src', mapasImg);
    expect(addMapa).toHaveLength(mapsPok);
  });

  test('Se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const linkDet = screen.getByRole('link', { name: /more details/i });

    userEvent.click(linkDet);

    const pokemonFav = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

    expect(pokemonFav).toBeInTheDocument();
  });
});
