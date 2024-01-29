import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE={
    cartList:[],
    cartCount:0
}

export const CartSlice=createSlice({
    name:'Cart',
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
         state.cartCount=1
         state.cartList.push(action.payload)
        },
        increment:(state)=>{
            state.cartCount+=1
        },
        decrement:(state)=>{
            state.cartCount-=1
        }
    }
})


export const {addToCart,increment,decrement}=CartSlice.actions
export default CartSlice.reducer