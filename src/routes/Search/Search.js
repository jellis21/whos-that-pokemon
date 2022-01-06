import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchResult, } from "../../redux/actions/searchActions";
import "./Search.css";

function Search({ belowScreenPokemon, searchResult }) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    if (belowScreenPokemon !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${belowScreenPokemon}/`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
        });
        
    }
  }, [belowScreenPokemon]);

  const [pokemon1, setPokemon1] = useState(null);
  useEffect(() => {
    if (belowScreenPokemon !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${belowScreenPokemon}/`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon1(data);
          searchResult(data.sprites.front_default)
        });
    }
  }, [belowScreenPokemon, searchResult]);

  if (!pokemon || !pokemon1) {
    return null;
  }
  return (
    <div className="search">
      <div className="search__content">
        <div className="a">
          <h3 id="pokemon-name">{pokemon.name}</h3>
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
  belowScreenPokemon: state.belowScreenReducer.pokemon,
});

const mapDispatchToProps = { searchResult };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
