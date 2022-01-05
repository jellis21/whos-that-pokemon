import { SEND_POKEMON } from "../actions/types";

const initialState = {
  pokemon: ''
}

function sendValue(state = initialState, action) {
  switch (action.type) {
    case SEND_POKEMON: {
      return {
        pokemon: action.payload
      }
    }
    default: return state;
  }
}

export default sendValue;