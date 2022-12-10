/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  goods: [],
  loading: false,
  error: null,
};

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async () => {
    const response = await fetch('http://localhost:3333/categories/all');
    const data = await response.json();
    return data;
  },
);

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchGoods.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGoods.fulfilled]: (state, action) => {
      state.loading = false;
      state.goods = action.payload;
    },
    [fetchGoods.rejected]: (state) => {
      state.loading = false;
      state.error = 'Error loading goods';
    },
  },
});

export const goodsActions = goodsSlice.actions;
export default goodsSlice.reducer;
