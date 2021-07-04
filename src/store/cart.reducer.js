export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
  shoppingList: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      const id = action.payload.id;
      const name = action.payload.name;
      const price = action.payload.price;
      const count = 0;

      const index = state.shoppingList.findIndex((el) => {
        return el.id === id;
      });

      console.log(index);

      if (state.shoppingList.length === 0 || index < 0) {
        return {
          ...state,
          shoppingList: [
            ...state.shoppingList,
            { id, name, price, count: count + 1 },
          ],
        };
      }

      const newList = [...state.shoppingList];
      newList[index].count += 1;

      return {
        ...state,
        shoppingList: newList,
      };

    case DECREMENT:
      return { ...state, totalCart: state.totalCart - 1 };
    default:
      return state;
  }
}
