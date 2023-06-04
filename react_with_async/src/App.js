import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true

function App() {
  const isVisible = useSelector(state => state.ui.cartIsVisible)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  //Fetch product from back-end
  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    } 

    if (cart.change) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
