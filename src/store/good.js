/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  good: [],
  loading: false,
  error: null,
};

export const fetchGood = createAsyncThunk(
  'good/fetchGood',
  async (goodId) => {
    const response = await fetch(`http://localhost:3333/products/${goodId}`);
    const data = await response.json();
    return data;
  },
);

const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchGood.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGood.fulfilled]: (state, action) => {
      state.loading = false;
      state.good = action.payload;
    },
    [fetchGood.rejected]: (state) => {
      state.loading = false;
      state.error = 'Error loading categories';
    },
  },
});

export const goodActions = goodSlice.actions;
export default goodSlice.reducer;
