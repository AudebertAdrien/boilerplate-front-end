import { INCREMENT, DECREMENT, CLEAR_CART } from "./cart.actions.js";

const initialState = {
  shoppingList: [
    {
      id: 1,
      name: "rocket",
      type: "Photo Cameras",
      image:
        "https://my-e-commerce-bucket.s3.eu-west-1.amazonaws.com/Pcamera1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing fugit vel magni ipsum maiores, soluta expedita debitis.",
      price: 35,
      count: 1,
    },
    {
      id: 8,
      name: "bigA$$",
      type: "Lens",
      image:
        "https://my-e-commerce-bucket.s3.eu-west-1.amazonaws.com/lens1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing fugit vel magni ipsum maiores, soluta expedita debitis.",
      price: 50,
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
              ...action.payload,
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
    case CLEAR_CART: {
      return {
        ...state,
        shoppingList: [],
      };
    }
    default:
      return state;
  }
}
