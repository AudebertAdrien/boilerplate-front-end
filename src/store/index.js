import { createStore, combineReducers, applyMiddleware } from "redux";

import { cartReducer } from "./cart.reducer.js";
import { listReducer } from "./list.reducer.js";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  items: listReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
