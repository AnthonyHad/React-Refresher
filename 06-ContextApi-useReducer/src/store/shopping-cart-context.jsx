import { createContext } from "react";

export const CartContext = createContext({
  // Better for autocomplete in IDEs
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
