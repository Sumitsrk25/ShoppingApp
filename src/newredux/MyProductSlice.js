import { createSlice } from "@reduxjs/toolkit";
const MyProductSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
  },
});
I;
export const { addMyProducts } = MyProductSlice.actions;
export default MyProductSlice.reducer;
