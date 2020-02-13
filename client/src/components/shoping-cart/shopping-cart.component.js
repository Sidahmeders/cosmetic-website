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
                    console.log(value)
                    if (value.cart.length) {
                        const {cart, totalPrice} = value;
                        return(
                            <div className="cart">
                                <CartProduct value={value} products={cart} />
                                <CartTotal totalPrice={totalPrice} />
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
