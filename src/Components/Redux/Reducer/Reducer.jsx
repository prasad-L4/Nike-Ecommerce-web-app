import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:'Cart',
    initialState:{
        value:false

    },
    reducers:{
        ModalisOPen:(state)=>{
            state.value = true;
        },
        ModalisClosed:(state)=>{
            state.value=false
        }
    }
})


export const {ModalisOPen,ModalisClosed}=CartSlice.actions
export default CartSlice.reducer