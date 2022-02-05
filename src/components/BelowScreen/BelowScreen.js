import React from "react";
import "./BelowScreen.css";
import { getValue, sendToTeam } from '../../redux/actions/belowScreenActions';
import { connect } from 'react-redux';

function BelowScreen( { getValue, sendToTeam, teammates } ) { 

  function onSubmit(e) {
    e.preventDefault();
    const value = e.target[1].value.toLowerCase();
    getValue(value);
  }

  function addToTeam() {
    if (teammates.length >= 6) {
      alert('You can only have six pokemon on your team!');
    } else {
      sendToTeam(document.getElementById("pokemon-name").innerText)
    }
  }

  return (
    <div className="below-screen">
      <div className="below-screen__container">
        <div className="below-screen__button-container">
          <div className="below-screen__button" onClick={addToTeam} title="Add pokemon to team">
            <p id="below-screen__button__text">A</p>
          </div>
        </div>
        <form className="below-screen__start-container" onSubmit={onSubmit}>
          <div className="below-screen__start">
            <button type="submit" className="below-screen__start-button" title="Search for pokemon you entered below">start</button>
          </div>
          <div className="below-screen__green-screen-container">
            <div className="below-screen__green-screen">
              <input id="search-field" type="text" title="Enter your pokemon"/>
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
  teammates: state.belowScreenReducer.team,
})

const mapDispatchToProps = { getValue, sendToTeam }

export default connect(mapStateToProps, mapDispatchToProps)(BelowScreen);
