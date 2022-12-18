import React from 'react';
import Header from './components/Header/Header';
import BookProvider from './store/BookProvider';

import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BookProvider className='app'>
      <Header />
      <Body />
      <Footer />
    </BookProvider>
  );
}

export default App;
