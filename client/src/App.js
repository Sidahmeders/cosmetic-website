import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductsProvider } from './context';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import ProductsList from './components/productsList.component';
import ShoppingCart from './components/shopping-cart.component';
import NotFound from './components/notfound.component';

function App() {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/productslist" component={ ProductsList } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;
