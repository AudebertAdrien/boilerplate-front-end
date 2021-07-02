export const GET_ITEMS_LIST = "GET_ITEMS_LIST";

const initialState = {};

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
