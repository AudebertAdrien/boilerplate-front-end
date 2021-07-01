import { createStore, combineReducers } from "redux";

import { cartReducer } from "./cart.reducer.js";

export default createStore(
  combineReducers({
    cart: cartReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
