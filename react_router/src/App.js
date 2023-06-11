import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import RootLayout from './pages/RootLayout';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/login' element={<Login />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/login', element: <Login />},
      {path: '/products', element: <Product />},
      {path: 'products/:productId', element: <ProductDetail />},
    ],
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
