import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCateg(state, action) {
      state.categ = action.payload;
    },
  },
});

export const { setCateg } = cartSlice.actions;

export default cartSlice.reducer;
