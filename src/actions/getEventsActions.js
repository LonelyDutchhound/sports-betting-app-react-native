import { GET_EVENTS } from "../constants";

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
