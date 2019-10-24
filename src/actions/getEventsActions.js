import { GET_EVENTS } from "../constants";

export const getData = () => {
  return async function(dispatch) {
    try {
      let mapedEvents, selections, mapedSelections;
      const response = await fetch(
        "http://www.mocky.io/v2/59f08692310000b4130e9f71"
      );
      const events = await response.json();

      mapedEvents = events.map(event => {
        event.markets.map(market => {
          market.name === "Team to Win"
            ? (market.name = "To WIN")
            : (market.name = "To Score First");
          market.selections.map(selection => {
            selection.market = market.name;
            return selection;
          });
        });
        return event;
      });

      selections = mapedEvents.reduce(
        (accumE, event) => [
          ...accumE,
          ...event.markets.reduce(
            (accumM, market) => [...accumM, ...market.selections],
            []
          )
        ],
        []
      );
      mapedSelections = selections.map(selection => ({
        ...selection,
        isSelected: false
      }));
      // console.log( mapedEvents );
      dispatch(getEvents(mapedEvents, mapedSelections));
    } catch (error) {
      console.log(error); //temporary solution, error handler needed
    }
  };
};

export const getEvents = (events, selections) => ({
  type: GET_EVENTS,
  events,
  selections
});
