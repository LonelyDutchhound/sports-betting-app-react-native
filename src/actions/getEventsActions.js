import { GET_EVENTS } from "../constants";

export const getData = () => {
  return async function (dispatch) {
    try {
      let selections, mapedSelections;
      const response = await fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71');
      const events = await response.json();
      selections = events.reduce( (accumE, event) => [ ...accumE,
          ...event.markets.reduce( ( accumM, market ) => [...accumM,
            ...market.selections],
            [])],
        []);
      mapedSelections = selections.map( selection => ({ ...selection, isSelected: false }));
      dispatch(getEvents(events, mapedSelections));
    } catch ( error ) {
      console.log(error)  //temporary solution, error handler needed
    }
  }
};

export const getEvents = (events, selections) => ({
  type: GET_EVENTS,
  events,
  selections
});
