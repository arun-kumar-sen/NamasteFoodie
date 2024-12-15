import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  // slices are there inside the store
  // Here also we will have reucer , it will be a main reducer (all slice reducers will be here)

  reducer: {
    cart: cartSlice,
  },
});

export default store;
