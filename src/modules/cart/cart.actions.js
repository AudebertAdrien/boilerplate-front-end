import axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CLEAR_CART = "CLEAR_CART";

export const incrementCart = (item) => ({
  type: INCREMENT,
  payload: item,
});

export const decrementCart = (item) => ({
  type: DECREMENT,
  payload: item,
});

export const fetchPaymentIntent = (amount) => {
  return (dispatch) => {
    return axios
      .post(`${WEBPACK_BASE_URL}/cart`, { amount })
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: CLEAR_CART });
        }
      })
      .catch((err) => console.log(err));
  };
};
