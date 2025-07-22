import { createSlice } from "@reduxjs/toolkit";

const savedBasket = JSON.parse(localStorage.getItem("basketItems")) || [];

const initialState = {
  items: savedBasket,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price, image, count } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count = count;
      } else {
        state.items.push({ id, name, price, image, count });
      }
    },
    removeFromBasket: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseCount,
  decreaseCount,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
