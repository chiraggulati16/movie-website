import { createSlice } from "@reduxjs/toolkit";

// starts empty
const initialState = {
    name:"",
    email:"",
    photo:""
}

const authSlice =  createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLoginDetails:(state, action)=>{ // when login In
            state.name = action.payload.name;
            state.email = action.payload.emaial;
            state.photo = action.payload.photo;
        },
        setSignOutState:state =>{ // when logging Out
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const {setUserLoginDetails, setSignOutState} = authSlice.actions;

export default authSlice.reducer;
