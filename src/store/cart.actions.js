export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementCart = (item) => ({
  type: INCREMENT,
  payload: item,
});

export const decrementCart = (item) => ({
  type: DECREMENT,
  payload: item,
});
