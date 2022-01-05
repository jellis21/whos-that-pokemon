import { FETCH_POKEMON } from "./types";

export const searchResults = (value) => dispatch => {
  dispatch({
    type: FETCH_POKEMON,
    payload: value
  })
}