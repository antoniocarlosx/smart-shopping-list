import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const productAdded = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === productAdded.id,
      );

      if (!existingProduct) {
        state.items.push({ ...productAdded, quantity: 1, picked: false });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
