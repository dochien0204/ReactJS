import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import UserProfile from './components/UserProfile'
import Auth from './components/Auth'
import Counter from './components/Counter';

function App() {
  
  const isAuthenticate = useSelector(state => state.auth.isAuthenticate);
  console.log(isAuthenticate);
  return (
    <Fragment>
      <Header />
      {!isAuthenticate && <Auth/>}
      {isAuthenticate && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
