import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// This defines the store to be accessed across the entire app if needed.
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store;