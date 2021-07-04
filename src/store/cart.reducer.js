export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
  totalCart: 0,
  shoppingList: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state;
    case DECREMENT:
      return { ...state, totalCart: state.totalCart - 1 };
    default:
      return state;
  }
}
/* 
 const index = state.shoppingList.findIndex((el, index) => {
        return el.item.id === action.payload.item.id ? index : index + 1;
      });
      console.log(index);
      if (state.shoppingList.length === 0 || index === undefined) {
        return {
          ...state,
          totalCart: state.totalCart + 1,
          shoppingList: [...state.shoppingList, action.payload],
        };
      }

      const newList = [...state.shoppingList];
      newList[index].count = action.payload.count + 1;
      return {
        ...state,
        totalCart: state.totalCart + 1,
        shoppingList: newList,
      };

*/
