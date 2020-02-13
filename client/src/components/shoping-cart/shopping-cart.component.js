import React from 'react';
import '../../styles/shopping-cart/shopping-cart.css';
import { ProductsConsumer } from '../../context';
import CartProduct from './cartProduct.component';
import CartTotal from './cartTotal.component';
import EmptyCart from './emptycart.component';


function ShoppingCart() {

    return (
        <div className="shopping-cart">
            <ProductsConsumer>
                {(value) => {
                    const {cart, totalPrice} = value;
                    if (value.cart.length) {
                        return(
                            <div className="cart">
                                <CartProduct products={cart} value={value} />
                                <CartTotal totalPrice={totalPrice} value={value} />
                            </div>
                        ); 
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductsConsumer>
        </div>
    );
};

export default ShoppingCart;
