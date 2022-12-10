import { configureStore } from '@reduxjs/toolkit';
import goodsSliceReducer from './goods';
import categoriesSliceReducer from './categories';

const store = configureStore({
  reducer: {
    goods: goodsSliceReducer,
    categories: categoriesSliceReducer,
  },
});

export default store;
