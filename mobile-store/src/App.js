import React from 'react';
import {Router,Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import  ProductLst from './components/ProductList';
import Details from './components/Details';
import  Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
  return (
   <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={ProductLst}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route component={Default}></Route>
    </Switch>
    <Modal></Modal>
   </>
  );
}

export default App;
