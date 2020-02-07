import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import Details from './components/details.component';
import ShoppingCart from './components/shopping-cart.component';
import NotFound from './components/notfound.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/details" component={ Details } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
