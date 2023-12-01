import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../newredux/MyProductSlice";
export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
  },
});
