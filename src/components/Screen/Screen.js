import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Landing from '../../routes/Landing/Landing';
import Search from '../../routes/Search/Search';
import Team from '../../routes/Team/Team';
import "./Screen.css";

function Screen() {
  return (
    <div className="screen">
      <div className="screen__outer">
        <div className="screen__content">
          <nav>
            <ul className="screen__content__nav">
              <li><NavLink to="/" style={{color: 'orange', textDecoration: "none"}}>Home</NavLink></li>
              <li><NavLink to="search" style={{color: 'orange', textDecoration: "none"}}>Search</NavLink></li>
              <li><NavLink to="team" style={{color: 'orange', textDecoration: "none"}}>Team</NavLink></li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="search" element={<Search />} />
              <Route path="team" element={<Team />} />
            </Routes>
          </main>




        </div>
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
