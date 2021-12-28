import React from "react";
import "./BelowScreen.css";

function BelowScreen() {
  return (
    <div className="below-screen">
      <div className="below-screen__container">
        <div className="below-screen__button-container">
          <div className="below-screen__button"></div>
        </div>
        <div className="below-screen__start-container">
          <div className="below-screen__start">
            <div className="below-screen__start-button">search</div>
          </div>
          <div className="below-screen__green-screen-container">
            <div className="below-screen__green-screen"></div>
          </div>
        </div>
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
