import { INCREMENT, DECREMENT } from "./cart.actions.js";

const initialState = {
  shoppingList: [
    {
      id: 111,
      name: "Apricot",
      type: "fruit",
      image: "https://via.placeholder.com/150/92c952",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing fugit vel magni ipsum maiores, soluta expedita debitis.",
      price: 125,
      count: 1,
    },
    {
      id: 222,
      name: "Pineapple",
      type: "fruit",
      image: "https://via.placeholder.com/150/92c952",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing fugit vel magni ipsum maiores, soluta expedita debitis.",
      price: 35,
      count: 1,
    },
  ],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const count = 0;

      let index = state.shoppingList.findIndex((el) => {
        return el.id === action.payload.id;
      });

      // if state is empty or create one ref if it cannot find any item
      if (state.shoppingList.length === 0 || index < 0) {
        return {
          ...state,
          shoppingList: [
            ...state.shoppingList,
            {
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              description: action.payload.description,
              count: count + 1,
            },
          ],
        };
      }
      let newList = state.shoppingList.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          count: item.count + 1,
        };
      });

      return {
        ...state,
        shoppingList: [...newList],
      };
    }
    case DECREMENT: {
      let index = state.shoppingList.findIndex((el) => {
        return el.id === action.payload.id;
      });

      if (state.shoppingList.length === 0 || index < 0) {
        return state;
      }

      let newList = state.shoppingList.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          count: item.count > 0 ? item.count - 1 : 0,
        };
      });

      return {
        ...state,
        shoppingList: [...newList],
      };
    }
    default:
      return state;
  }
}