import React from 'react';
import {Store} from './Reducer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './Home';
import BookingSeat from './BookingSeat';
import Login from './Login';

const Router = () => {
  
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Seats' element={<BookingSeat/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default Router