import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((acc, el) => acc+ el.price, 0)
    },
    removeProduct(state, action) {
      state.items.filter((el) => el.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeProduct, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
