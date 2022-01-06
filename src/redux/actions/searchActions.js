import { FETCH_POKEMON } from "./types";

export const searchResult = (name) => (dispatch) => {
  dispatch({
    type: FETCH_POKEMON,
    payload: {
      name
    },
  });
};