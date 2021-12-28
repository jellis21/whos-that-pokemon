import React from "react";
import "./AboveScreen.css";

function AboveScreen() {
  return (
    <div className="above-screen">
      <div className="above-screen__section">
        <div className="above-screen__section__light-container">
          <div className="above-screen__section__light"></div>
        </div>
      </div>
      <div className="above-screen__section">
        <div className="above-screen__section__button__container">
          <div className="above-screen__section__button"></div>
          <div className="above-screen__section__button"></div>
        </div>
      <svg height="70" width="180">
        <line
          x1="0"
          y1="69"
          x2="168"
          y2="0"
          style={{stroke: "black", strokeWidth: 2}}
        />
      </svg>
      </div>
      <div className="above-screen__section">
        <div className="above-screen__section__line"></div>
        <div className="above-screen__section__line"></div>
      </div>

    </div>
  );
}

export default AboveScreen;
