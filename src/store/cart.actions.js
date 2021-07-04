import { INCREMENT, DECREMENT } from "./cart.reducer.js";

export const incrementCart = (item) => ({
  type: INCREMENT,
  payload: item,
});

export const decrementCart = (item) => ({
  type: DECREMENT,
  payload: item,
});
