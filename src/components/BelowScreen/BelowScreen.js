import React from "react";
import { useState } from 'react';
import "./BelowScreen.css";

function BelowScreen() {
  const [greenScreenValue, setGreenScreenValue] = useState();

  function onSubmit(e) {
    e.preventDefault();
    console.log(greenScreenValue)
  }

  function onChange(e) {
    let value = e.target.value
    setGreenScreenValue(value)
  }

  return (
    <div className="below-screen">
      <div className="below-screen__container">
        <div className="below-screen__button-container">
          <div className="below-screen__button"></div>
        </div>
        <form className="below-screen__start-container" onSubmit={onSubmit}>
          <div className="below-screen__start">
            <button type="submit" className="below-screen__start-button">start</button>
          </div>
          <div className="below-screen__green-screen-container">
            <div className="below-screen__green-screen">
              <input onChange={onChange} type="text" />
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

export default BelowScreen;
