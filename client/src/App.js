import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextProvider } from './context';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import ProductsList from './components/products-list/productsList.component';
import ProductsLinkPage from './components/products-link-pages/productsLinkPage.component';
import Details from './components/details.component';
import Modal from './components/modal.component';
import ShoppingCart from './components/shoping-cart/shopping-cart.component';
import NotFound from './components/notfound.component';


function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/productslist" component={ ProductsList } />
            <Route path="/details" component={ Details } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
            <Route path="/productspage" component={ ProductsLinkPage } />
            <Route component={ NotFound } />
          </Switch>
          <Modal />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
