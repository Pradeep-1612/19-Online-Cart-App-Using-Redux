import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [],
  hasCartItemsChanged: false,
  notification: undefined,
};
const cartState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    addItemToCart(state, action) {
      const newItemId = action.payload;
      const existingItem = state.items.find((item) => item.id === newItemId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id: newItemId, quantity: 1 });
      }
      state.hasCartItemsChanged = true;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId
      );

      if (state.items[existingItemIndex].quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items[existingItemIndex].quantity--;
      }
      state.hasCartItemsChanged = true;
    },
    replaceCartItems(state, action) {
      state.items = action.payload || [];
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartState.actions;
export default cartState.reducer;
