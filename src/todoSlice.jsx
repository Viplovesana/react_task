
import { createSlice } from "@reduxjs/toolkit";

const Todoslice=createSlice({
    name:"todo",
    initialState:{
        task:[]

    },
    reducers:{
        addtask:(state,action)=>{
            state.task.push(action.payload);

        }
    }
})
export const{addtask}=Todoslice.actions;
export default Todoslice.reducer;