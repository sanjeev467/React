import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../src/slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
