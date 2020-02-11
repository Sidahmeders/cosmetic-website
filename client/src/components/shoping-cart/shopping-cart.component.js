import React from 'react';
import { ProductsConsumer } from '../../context';
import CartProduct from './cart-product.component';
import '../../styles/shopping-cart/shopping-cart.css';


function ShoppingCart() {

    return (
        <div className="shopping-cart">
            <div className="cart-products">
                <ProductsConsumer>
                    {(value) => {
                        const cartProducts = value.productsListCopy.filter(product => product.inCart === true);
                        return cartProducts.map(cartProduct => {
                            return <CartProduct key ={cartProduct.id} cartProduct={cartProduct} />
                        });
                    }}
                </ProductsConsumer>
            </div>
        </div>
    );
};

export default ShoppingCart;
