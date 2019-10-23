import {DELETE_BET, MAKE_BET} from "../constants";

export const makeBet = id => ({
    type: MAKE_BET,
    id
  });

export const deleteBet = id => ({
    type: DELETE_BET,
    id
  });