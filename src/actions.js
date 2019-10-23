import { DELETE_BET, GET_EVENTS, MAKE_BET } from "./constants";

export const getData = () => {
  return async function (dispatch) {
    try {
      const response = await fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71');
      const events = await response.json();
      dispatch(getEvents(events));
    } catch ( error ) {
      console.log(error)  //temporary solution, error handler needed
    }
  }
};

export const getEvents = (events) => ({
  type: GET_EVENTS,
  events
});

export const makeBet = id => ({
  type: MAKE_BET,
  id
});

export const deleteBet = id => ({
  type: DELETE_BET,
  id
});