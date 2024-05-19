import { createSlice } from "@reduxjs/toolkit";

// This defines the initial items in the users cart, which is none.
// As well as defining the actions and reducers in order to manipulate the cart items acrpss the entire app if needed.

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        // Allows for the item to be added to the cart
        addToCart : (state, action) => {
            state.cart.push(action.payload)
        },
        // Allows for one specific item to be removed once in the cart
        removeFromCart : (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
        // Allows for all items to be removed from the cart
        removeAll : (state) => {
            state.cart = [];
        }
    },
});

export default cartSlice.reducer;
export const {addToCart, removeFromCart, removeAll} = cartSlice.actions;