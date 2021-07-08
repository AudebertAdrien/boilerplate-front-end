import axios from "axios";

export const GET_ITEMS_LIST = "GET_ITEMS_LIST";

export const fetchSortedList = (category) => {
  return (dispatch) => {
    return axios
      .get(WEBPACK_BASE_URL)
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
      .get(WEBPACK_BASE_URL)
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
