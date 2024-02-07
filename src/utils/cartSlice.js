import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop(); //removing one item from the end
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
      //state = [] -> this will not work.
    },
  },
});
console.log(cartSlice);
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
