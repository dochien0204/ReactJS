import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
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
            state.totalQuantity--
            const id = action.payload
            const existingItem = state.items.find((item) => item.itemId === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.itemId !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice