import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categ: 0,
  sort: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCateg(state, action) {
      state.categ = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action) {
      state.sort = +action.payload.sort;
      state.categ = +action.payload.categ;
    },
  },
});

export const { setCateg, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
