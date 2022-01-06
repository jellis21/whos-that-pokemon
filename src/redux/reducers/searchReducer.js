import { FETCH_POKEMON } from "../actions/types";

const initialState = {
  pokemonName: []
}

function fetchResults(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON: {
      return {
        pokemonName: action.payload
      }
    }
    default: return state;
  }
}

export default fetchResults;