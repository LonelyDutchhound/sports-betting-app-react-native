import {DELETE_BET, MAKE_BET, GET_EVENTS} from "./constants";

const initialState = {
  isFetched: false,
  events: [],
  bets: []
};

export const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, isFetched: true, events: action.events };
    case MAKE_BET:
      let newBet;
      for (const event in state){
        for (const market of event['markets']){
          newBet = market['selections'].filter( selection => action.id === selection.id);
        }
      }
      return { ...state, bets: [...state.bets, newBet]};
    case DELETE_BET:
      let ind = state.bets.findIndex( selection => selection.id === id);
      const updatedBets = [...state.bets.slice(0,ind), ... state.bets.slice(ind+1)];
      return {...state, bets: [ ...updatedBets ]};
    default:
      return state;
  }
};