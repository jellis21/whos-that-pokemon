import React from "react";
import { useEffect, useState } from "react";
import "./Screen.css";

function Screen() {
  const [pokemon, setPokemon] = useState(null);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon-species/bulbasaur/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPokemon(data);
  //     });
  // }, []);
  // if (!pokemon) {
  //   return null;
  // }

  return (
    <div className="screen">
      <div className="screen__outer">
        <div className="screen__content"></div>
        <div className="screen__speaker">
          <div className="screen__speaker-left">
            <div className="screen__speaker-left-column">
            <div className="screen__diagonal"></div>
            </div>
            <div className="screen__circle"></div>
          </div>
          <div className="screen__lines"></div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
