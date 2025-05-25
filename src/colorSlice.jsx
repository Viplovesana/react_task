

import { createSlice } from "@reduxjs/toolkit";

const Colorslice=createSlice({
    name:"themechange",
    initialState:{
        color:"white"
    },
    reducers:{
        colorchange:(state,action)=>{
            state.color=action.payload;

        }

    }

})
export const{colorchange}=Colorslice.actions;
export default Colorslice.reducer;