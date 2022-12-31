/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  goods: [],
  loading: false,
  error: null,
};

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (goodsCat) => {
    const response = goodsCat === 'all'
      ? await fetch(`http://localhost:3333/products/${goodsCat}`)
      : await fetch(`http://localhost:3333/categories/${goodsCat}`);
    const data = await response.json();
    const dataWithoutStrings = data.map((item) => {
      const getNumFromStr = (str) => Number(str.replace(/\D/g, ''));
      const price = typeof item.price === 'string' ? getNumFromStr(item.price) : item.price;
      // eslint-disable-next-line camelcase
      const discont_price = typeof item.discont_price === 'string' ? getNumFromStr(item.discont_price) : item.discont_price;
      // eslint-disable-next-line camelcase
      return { ...item, price, discont_price };
    });
    return dataWithoutStrings;
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
