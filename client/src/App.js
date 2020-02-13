import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductsProvider } from './context';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import ProductsList from './components/products-list/productsList.component';
import Details from './components/details.component';
import ShoppingCart from './components/shoping-cart/shopping-cart.component';
import NotFound from './components/notfound.component';
import Modal from './components/modal.component';

function App() {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/productslist" component={ ProductsList } />
            <Route path="/details" component={ Details } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
            <Route component={ NotFound } />
          </Switch>
          <Modal />
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;
