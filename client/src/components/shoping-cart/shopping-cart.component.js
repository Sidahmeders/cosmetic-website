import React, { useContext } from 'react';
import '../../styles/shopping-cart/shopping-cart.css';
import { ContextConsumer } from '../../context';
import CartProduct from './cartProduct.component';
import CartTotal from './cartTotal.component';
import EmptyCart from './emptycart.component';


function ShoppingCart() {

    const context = useContext(ContextConsumer);
    const {cart, totalPrice} = context;

    return (
        <div className="shopping-cart">
            {cart.length ?
              (
                <React.Fragment>
                    <CartProduct products={cart} value={context} />
                    <CartTotal totalPrice={totalPrice} value={context} />
                </React.Fragment>
                
              ) :
              (
                <EmptyCart />
              )
            }
        </div>
    );
};

export default ShoppingCart;
