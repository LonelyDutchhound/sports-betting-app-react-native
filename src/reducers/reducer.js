import { TOGGLE_BET, GET_EVENTS } from '../constants';

const initialState = {
  isFetched: false,
  events: [],
  selections: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        isFetched: true,
        events: action.events,
        selections: action.selections,
      };
    case TOGGLE_BET:
      const updSelections = state.selections.map((selection) => {
        if (selection.id === action.id) { selection.isSelected = !selection.isSelected; }
        return selection;
      });
      return { ...state, selections: updSelections };
    default:
      return state;
  }
};
