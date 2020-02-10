import React from 'react';
import { ProductsConsumer } from '../context';


function CartProduct(props) {

    const {id, period, img, type, description, size, price} = props.cartProduct;

    return(
        <div key={id}>
            <h5>{period}</h5>
            <img width="150px" src={img} alt="product" />
            <h4>{type}</h4>
            <p>{description}</p>
            <h5>{size}</h5>
            <h4>{price}$</h4>
        </div>
    );
}

function ShoppingCart() {

    return (
        <div className="shopping-cart">
            <h1 style={{marginTop:"40vh"}}>Shopping cart component</h1>
            <ProductsConsumer>
                {(value) => {
                    const cartProducts = value.productsListCopy.filter(product => product.inCart === true);
                    return cartProducts.map(cartProduct => {
                        return <CartProduct key ={cartProduct.id} cartProduct={cartProduct} />
                    });
                }}
            </ProductsConsumer>
        </div>
    );
};

export default ShoppingCart;
