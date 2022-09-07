import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categ: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCateg(state, action) {
      state.categ = action.payload;
    },
  },
});

export const { setCateg } = filterSlice.actions;

export default filterSlice.reducer;
