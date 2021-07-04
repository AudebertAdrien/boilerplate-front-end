import { GET_ITEMS_LIST } from "./list.actions.js";

const initialState = {};

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
