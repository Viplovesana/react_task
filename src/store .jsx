
import { configureStore } from "@reduxjs/toolkit";
import countreducer from "./counterSlice"
import colorreducer from "./colorSlice"
import todoreducer from "./todoSlice"
const Store=configureStore({
  reducer:{
    count:countreducer,
    themechange:colorreducer,
    todo:todoreducer

  }
});
export default Store;