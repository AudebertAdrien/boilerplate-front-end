export const itemCountSelector =
  (itemId) =>
  ({ cart: { shoppingList } }) => {
    return shoppingList.find((item) => item.id === itemId);
  };

export const totalCartSelector = ({ cart: { shoppingList } }) => {
  return shoppingList.reduce((acc, item) => {
    return item.count + acc;
  }, 0);
};

export const cartShoppingListSelector = ({ cart: { shoppingList } }) => {
  return shoppingList;
};
