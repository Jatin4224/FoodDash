import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger", "pizza"],
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
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
