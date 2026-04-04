import { createSlice } from "@reduxjs/toolkit";
const initialState=0
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incre:(state)=>{
            return state+1
        },
        decre:(state)=>{
            return state-1
        },
        reset:()=>{
            return 0
        }
    }
})


export const {incre,decre,reset}=counterSlice.actions
export default counterSlice.reducer