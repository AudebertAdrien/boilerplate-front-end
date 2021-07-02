import axios from "axios";

import { GET_ITEMS_LIST } from "./list.reducer.js";

export const fetchSortedList = (category) => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/")
      .then((res) => {
        let list = res.data.list;
        list = list.filter((item) => {
          if (item.type == category) return item;
        });
        dispatch({ type: GET_ITEMS_LIST, payload: list });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchSearchedFList = (search) => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/")
      .then((res) => {
        let list = res.data.list;
        let filteredList = list.filter((item) => {
          const name = item.name.toLowerCase();
          const term = search.toLowerCase();
          return name.indexOf(term) > -1;
        });
        dispatch({ type: GET_ITEMS_LIST, payload: filteredList });
      })
      .catch((err) => console.log(err));
  };
};
