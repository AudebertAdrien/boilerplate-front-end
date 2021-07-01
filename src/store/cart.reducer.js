export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
  count: 1,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
