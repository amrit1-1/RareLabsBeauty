import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart : (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart : (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        }
    },
});

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;