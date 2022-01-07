import { SEND_POKEMON, SEND_TO_TEAM, DELETE_FROM_TEAM } from "../actions/types";

const initialState = {
  pokemon: '',
  team: ''
}

function sendValue(state = initialState, action) {
  switch (action.type) {
    case SEND_POKEMON: {
      return {
        pokemon: action.payload,
        team: [...state.team], 
    }
  }
    case SEND_TO_TEAM: {
      return {
        pokemon: action.payload,
        team: [...state.team, action.payload], 
      }
    }
    case DELETE_FROM_TEAM: {
      return {
        pokemon: state.pokemon,
        team: [...state.team.filter((pokemon) => pokemon !== action.payload)]
      }
    }
    default: return state;
  }
}

export default sendValue;