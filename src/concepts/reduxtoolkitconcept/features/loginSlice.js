import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:"",
    password:""
}
const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        handleinput:(state,action)=>{
            return {...state,...action.payload}
        },
        loginsubmit:(state)=>{
            // write logic backend to submit the form 
            console.log("login done")
            return initialState
        },
        resetForm:()=>{
            return initialState
        }
    }
})

export const {handleinput,loginsubmit,resetForm}=loginSlice.actions
export default loginSlice.reducer