import { INCREMENT, DECREMENT } from "./cart.reducer.js";

export const incrementCart = (item, addOne) => ({
  type: INCREMENT,
  payload: {
    item,
    count: addOne,
  },
});

export const decrementCart = (payload) => ({
  type: DECREMENT,
  payload,
});
