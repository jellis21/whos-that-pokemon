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
    <div className="screen-container">
      <div className="screen-border">
        <div className="screen"></div>
        <div className="speaker">
          <div className="example">
            <div className="example2">
            <div className="diagonal"></div>
            </div>
            <div className="circle"></div>
          </div>
          <div className="lines"></div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
