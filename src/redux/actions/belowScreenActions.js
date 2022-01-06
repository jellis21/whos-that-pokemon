import { SEND_POKEMON, SEND_TO_TEAM } from "./types";

export const getValue = (value) => (dispatch) => {
  dispatch({
    type: SEND_POKEMON,
    payload: value
  })
}

export const sendToTeam = (pokemon) => (dispatch) => {
  dispatch({
    type: SEND_TO_TEAM,
    payload: pokemon
  })
}