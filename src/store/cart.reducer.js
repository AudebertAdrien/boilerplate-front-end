export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
  shoppingList: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      console.log("Increment");
      const count = 0;

      let index = state.shoppingList.findIndex((el) => {
        return el.id === action.payload.id;
      });

      if (state.shoppingList.length === 0 || index < 0) {
        return {
          ...state,
          shoppingList: [
            ...state.shoppingList,
            {
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              count: count + 1,
            },
          ],
        };
      }

      const newList = [...state.shoppingList];
      newList[index].count += 1;

      return {
        ...state,
        shoppingList: newList,
      };
    }
    case DECREMENT: {
      console.log("Decrement");

      let index = state.shoppingList.findIndex((el) => {
        return el.id === action.payload.id;
      });

      if (state.shoppingList.length === 0 || index < 0) {
        return state;
      }

      const newList = [...state.shoppingList];
      newList[index].count > 0 ? (newList[index].count -= 1) : 0;

      return {
        ...state,
        shoppingList: newList,
      };
    }
    default:
      return state;
  }
}
