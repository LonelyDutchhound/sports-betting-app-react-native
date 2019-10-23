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
      console.log(action.id);
      let newBet;
      for (const event of state.events){
        for (const market of event.markets){
          for (const selection of market.selections){
              if (action.id === selection.id) newBet = selection;
          }
        }
      }
      return { ...state, bets: [...state.bets, newBet]};
      case DELETE_BET:
        console.log(action.id);
        let ind = state.bets.findIndex( selection => selection.id === action.id);
        const updatedBets = [...state.bets.slice(0,ind), ... state.bets.slice(ind+1)];
        return {...state, bets: [ ...updatedBets ]};
      default:
        return state;
      }
};