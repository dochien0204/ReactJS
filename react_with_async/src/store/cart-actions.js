import { cartActions } from "./cart-slice"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-post-3403b-default-rtdb.firebaseio.com/cart.json',{
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error("Failed to fetch cart data")
            }
            
            const data = response.json()
            return data
        }
        
        const cartData = await fetchData()
        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
        }))
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('https://react-post-3403b-default-rtdb.firebaseio.com/cart.json',{
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity})
            })
            if (!response.ok) {
                throw new Error("Have Error")
            }
        }

        await sendRequest()
    }
}