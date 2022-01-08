import React from 'react';
import pokemonImage from "../../images/pokeball.gif";
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <img className="landing__image" src={pokemonImage} alt="who's that pokemon?" />
    </div>
  )
}

export default Landing
