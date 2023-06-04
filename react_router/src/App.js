import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<Login />} />
  </Route>
)

const router = createBrowserRouter(routeDefinitions)
// const router = createBrowserRouter([
//   {path: '/', element: <HomePage />},
//   {path: '/login', element: <Login />}
// ])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
