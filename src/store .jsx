
import { configureStore } from "@reduxjs/toolkit";
import countreducer from "./counterSlice"
import colorreducer from "./colorSlice"
const Store=configureStore({
  reducer:{
    count:countreducer,
    themechange:colorreducer

  }
});
export default Store;