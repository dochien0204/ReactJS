import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    fetch('https://react-post-3403b-default-rtdb.firebaseio.com/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart),
    })
  }, [cart])

  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
