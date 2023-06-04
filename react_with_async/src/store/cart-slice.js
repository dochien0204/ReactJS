import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    change: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.change = true
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.itemId === newItem.id);
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalQuantity++
        },
        removeItemFromCart(state, action) {
            state.change = true
            state.totalQuantity--
            const id = action.payload
            const existingItem = state.items.find((item) => item.itemId === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.itemId !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice