import React from "react";
import "./BelowScreen.css";
import { getValue, sendToTeam } from '../../redux/actions/belowScreenActions';
import { connect } from 'react-redux';

function BelowScreen( { getValue, sendToTeam } ) { 

  function onSubmit(e) {
    e.preventDefault();
    const value = e.target[1].value;
    getValue(value);
  }

  function addToTeam() {
    sendToTeam(document.getElementById("pokemon-name").innerText)
  }

  return (
    <div className="below-screen">
      <div className="below-screen__container">
        <div className="below-screen__button-container">
          <div className="below-screen__button" onClick={addToTeam}></div>
        </div>
        <form className="below-screen__start-container" onSubmit={onSubmit}>
          <div className="below-screen__start">
            <button type="submit" className="below-screen__start-button">start</button>
          </div>
          <div className="below-screen__green-screen-container">
            <div className="below-screen__green-screen">
              <input id="search-field" type="text" />
            </div>
          </div>
        </form>
        <div className="below-screen__dpad-container">
          <div className="below-screen__dpad">
            <div className="below-screen__dpad-buttons">
              <div className="dpad-buttons"></div>
              <div className="dpad-buttons dpad-buttons--black" id="up-arrow"></div>
              <div className="dpad-buttons"></div>
            </div>
            <div className="below-screen__dpad-buttons">
              <div className="dpad-buttons dpad-buttons--black" id="left-arrow"></div>
              <div className="dpad-buttons dpad-buttons--black"></div>
              <div className="dpad-buttons dpad-buttons--black" id="right-arrow"></div>
            </div>
            <div className="below-screen__dpad-buttons">
              <div className="dpad-buttons"></div>
              <div className="dpad-buttons dpad-buttons--black" id="down-arrow"></div>
              <div className="dpad-buttons"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedPokemon: state.belowScreenReducer.pokemon,
  teammate: state.belowScreenReducer.team,
})

const mapDispatchToProps = { getValue, sendToTeam }

export default connect(mapStateToProps, mapDispatchToProps)(BelowScreen);
