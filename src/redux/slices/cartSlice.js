import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.items.filter((el) => el.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
