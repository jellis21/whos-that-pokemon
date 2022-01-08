import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { deleteFromTeam } from "../../redux/actions/belowScreenActions";
import "./Team.css";

function Team({ teammates, deleteFromTeam }) {
  const [team, setTeam] = useState(null);
  useEffect(() => {
    let index = 0;
    const reduxTeam =
      teammates &&
      teammates.map((teammate) => {
        return (
          <li className="team__ul__li" key={index++}>
            {teammate}
            <button onClick={() => deleteFromTeam(teammate)} className="team__remove-button">remove</button>
          </li>
        );
      });
    setTeam(reduxTeam);
  }, [deleteFromTeam, teammates]);

  return (
    <div className="team">
      <ul className="team__list">{team}</ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedPokemon: state.belowScreenReducer.pokemon,
  teammates: state.belowScreenReducer.team,
});

const mapDispatchToProps = {deleteFromTeam};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
