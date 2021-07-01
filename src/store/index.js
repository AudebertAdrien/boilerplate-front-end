import { createStore, combineReducers } from "redux";

import { cartReducer } from "./cart.reducer.js";
// import { listReducer } from "./list.reducer.js";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default createStore(rootReducer);
