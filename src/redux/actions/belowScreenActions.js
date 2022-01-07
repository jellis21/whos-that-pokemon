import { SEND_POKEMON, SEND_TO_TEAM, DELETE_FROM_TEAM } from "./types";

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

export const deleteFromTeam = (pokemon) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_TEAM,
    payload: pokemon
  })
}
