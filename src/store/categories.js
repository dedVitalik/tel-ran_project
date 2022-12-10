/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch('http://localhost:3333/categories/all');
    const data = await response.json();
    return data;
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.goods = action.payload;
    },
    [fetchCategories.rejected]: (state) => {
      state.loading = false;
      state.error = 'Error loading goods';
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
