import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Search.css";

function Search( {belowScreenPokemon} ) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${belowScreenPokemon}/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPokemon(data);
      });
  }, [belowScreenPokemon]);

  const [pokemon1, setPokemon1] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${belowScreenPokemon}/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPokemon1(data);
      });
  }, [belowScreenPokemon]);

  if (!pokemon || !pokemon1) {
    return null;
  }
  return (
    <div className="search">
      <div className="search__content">
        <div className="a">
          <h3>{pokemon.name}</h3>
          <p>No. {pokemon.id}</p>
        </div>
        <div className="b">
        <img src={pokemon1.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  belowScreenPokemon: state.belowScreenReducer.pokemon
})

export default connect(mapStateToProps, null)(Search)
