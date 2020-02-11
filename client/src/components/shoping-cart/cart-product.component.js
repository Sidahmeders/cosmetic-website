import React from 'react';


function CartProduct(props) {

    const {period, img, type, description, size, price} = props.cartProduct;

    return(
        <div className="cart-product-item">
            <div>
                <h5>{period}</h5>
                <img width="150px" src={img} alt="product" />
                <h4>{type}</h4>
                <p>{description}</p>
                <h5>{size}</h5>
                <h4>{price}$</h4>
            </div>
        </div>
    );
}

export default CartProduct;
