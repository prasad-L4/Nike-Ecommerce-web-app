import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Reducer/Reducer'

export const store = configureStore({
  reducer: {
  cart: CartReducer,
  }
});
