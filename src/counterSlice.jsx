
import { createSlice } from "@reduxjs/toolkit"
const initialState={
    value:0
}
const CounterSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        increament:(state)=>{
            state.value=state.value+1;

        },
        decreament:(state)=>{
            state.value=state.value-1
            if (state.value<=0){
                alert("not less then one")

            }
            else{
                state.value;
            }

        },
        reset:(state)=>{
            state.value=0;

        }
    }
});
export const{increament,decreament,reset}=CounterSlice.actions;
export default CounterSlice.reducer;