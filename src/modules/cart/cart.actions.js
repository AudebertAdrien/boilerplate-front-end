import axios from "axios";

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

export const fetchPaymentIntent = (amount) => {
  return (dispatch) => {
    return axios
      .post(WEBPACK_BASE_URL, { amount })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
};
