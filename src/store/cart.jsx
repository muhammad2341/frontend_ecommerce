import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          state.items = state.items.filter(
            (item) => item.productId !== productId
          );
        }
      }
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
