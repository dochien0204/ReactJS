import { useReducer } from "react";

import CartContext from "./cart-context";


const defaultValue = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if(action.type === "ADD") {
        const updateTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updateItem;
        let updateItems;
        if(existingCartItem) {
            updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            state.items[existingCartItemIndex] = updateItem;
            updateItems = [...state.items];
        } else {
            updateItems = state.items.concat(action.item);
        }
        
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }

    if(action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price;
        let updateItems;

        if(existingCartItem.amount === 1) {
            updateItems = state.items.filter((item) => item.id !== existingCartItem.id);
        } else {
            const updateItem = {...existingCartItem, amount: (existingCartItem.amount - 1)}
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }
    return defaultValue;
};
const CartProvider = (props) => {

    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultValue);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item});
    };
    
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;