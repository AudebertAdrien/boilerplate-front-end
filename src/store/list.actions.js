import axios from "axios";

import { GET_ITEMS_LIST } from "./list.reducer.js";

export const getList = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/")
      .then((res) => {
        dispatch({ type: GET_ITEMS_LIST, payload: res.data.list });
      })
      .catch((err) => console.log(err));
  };
};
