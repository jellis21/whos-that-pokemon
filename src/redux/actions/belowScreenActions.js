import { SEND_POKEMON } from "./types";

export const getValue = (value) => (dispatch) => {
  dispatch({
    type: SEND_POKEMON,
    payload: value
  })
}