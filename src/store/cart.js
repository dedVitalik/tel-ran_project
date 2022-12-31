import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [{
      id: 1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ma', price: 4500, discont_price: 4000, quantity: 2,
    },
    {
      id: 2, title: 'Good2', price: 6500, discont_price: 4000, quantity: 2,
    },
    {
      id: 3, title: 'Good2', price: 8500, discont_price: 4000, quantity: 2,
    }],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      cartItem.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem.quantity === 1) {
        cartItem.quantity = 1;
      } else {
        cartItem.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      // eslint-disable-next-line no-param-reassign
      state.cart = removeItem;
    },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
