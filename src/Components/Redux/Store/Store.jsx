import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Reducer/Reducer'

const store = configureStore({
  reducer: {
    cart:CartReducer,
  }
});

export default store;