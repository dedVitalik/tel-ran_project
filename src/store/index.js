import { configureStore } from '@reduxjs/toolkit';
import goodsSliceReducer from './goods';
import categoriesSliceReducer from './categories';
import goodSliceReducer from './good';
import cartSliceReducer from './cart';

const store = configureStore({
  reducer: {
    goods: goodsSliceReducer,
    categories: categoriesSliceReducer,
    good: goodSliceReducer,
    cart: cartSliceReducer,
  },
});

export default store;
