import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/login', element: <Login />}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
