import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  cartAlert:false
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      state.cartCount = 1;
      state.cartList.push({ ...action.payload, count: 1 });
      state.cartAlert=true
    },
    increment: (state, action) => {
      const ProductID = action.payload;
      state.cartList.
        forEach((item) => {
          if (item.id === ProductID) {
            item.count++;
          }
        });
    },
    decrement: (state, action) => {
        const ProductID = action.payload;
        state.cartList.
        forEach((item) => {
          if (item.id === ProductID && item.count > 1) {
            item.count--;
          }
        });
      },
      deletebtn:(state,action)=>{
        const ProductID=action.payload;
      state.cartList=  state.cartList.filter((item)=>item.id!=ProductID)

      }
  },
});

export const { addToCart, increment, decrement,deletebtn } = CartSlice.actions;
export default CartSlice.reducer;
