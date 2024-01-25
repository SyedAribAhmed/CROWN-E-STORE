import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './components/header/Header';
import Auth from './Pages/authentication/Auth';
import Checkout from './Pages/checkout-page/Checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user-reducer/user.selector';
import { setCurrentUser } from './redux/user-reducer/user.actions';

function App() {

  const dispatch = useDispatch()
  const selectUser = createStructuredSelector({
    currentUser: selectCurrentUser
  })
  const currentUser = useSelector(selectUser) 
  const signIn = (user) => {
    dispatch(setCurrentUser(user))
  }

  let unsubscribeFromAuth = null;
  
  useEffect(() => {
      unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
            setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
            ;
        });
        setCurrentUser(userAuth);
      } 
        dispatch(setCurrentUser(userAuth)) 
    });
    return () => unsubscribeFromAuth();
  },[dispatch])
  
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes>
          <Route exact path='/' element = {<Homepage/>} />
          <Route path='/shop/*' element = {<ShopPage/>} />
          <Route path='/signin' element = {<Auth />} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>
      </Router>
    </div>
  );   
}

export default App;
