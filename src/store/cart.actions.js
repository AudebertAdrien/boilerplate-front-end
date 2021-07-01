import { INCREMENT, DECREMENT } from "./cart.reducer.js";

export const incrementCart = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrementCart = (payload) => ({
  type: DECREMENT,
  payload,
});
