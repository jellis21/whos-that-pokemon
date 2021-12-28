import React from 'react';
import { useEffect, useState } from "react";
import './Search.css';

function Search() {

  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/squirtle/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  const [pokemon1, setPokemon1] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon1(data);
      });
  }, []);

  if (!pokemon || !pokemon1) {
    return null;
  }
  return (
    <div className="search">
                <div className="search__content">
            <h3>{pokemon.name}</h3>
            <p>No. {pokemon.id}</p>
            <img src={pokemon1.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
          </div>
    </div>
  )
}

export default Search
