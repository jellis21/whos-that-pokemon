import { FETCH_POKEMON } from "../actions/types";

const initialState = {
  search: ''
}

function fetchResults(state = initialState, action) {
  switch (action.type) {
    // case FETCH_POKEMON: {
    //   return {
    //     pokemon: action.payload
    //   }
    // }
    default: return state;
  }
}

export default fetchResults;