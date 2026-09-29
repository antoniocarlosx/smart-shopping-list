import { createSlice } from "@reduxjs/toolkit";

const removeProductById = (state, id) => {
  state.items = state.items.filter((item) => item.id !== id);
};

const findItemById = (state, id) => {
  return state.items.find((item) => item.id === id);
};

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

    removeItem: (state, action) => {
      const productRemoved = action.payload;

      if (!productRemoved || !productRemoved.id) return;

      removeProductById(state, productRemoved.id);
    },

    togglePickItem: (state, action) => {
      const itemId = action.payload;
      const item = findItemById(state, itemId);
      if (item) {
        item.picked = !item.picked;
      }
    },

    incrementItem: (state, action) => {
      const productIncremented = action.payload;

      const item = findItemById(state, productIncremented.id);

      if (!productIncremented) return;
      if (!item) return;

      item.quantity++;
    },

    decrementItem: (state, action) => {
      const productDecremented = action.payload;
      const item = findItemById(state, productDecremented.id);

      if (!productDecremented) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        removeProductById(state, productDecremented.id);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  togglePickItem,
  incrementItem,
  decrementItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
