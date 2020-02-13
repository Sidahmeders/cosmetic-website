import React from 'react';


function CartProduct(props) {
    
    return(
        <div className="cart-products">
            {props.products.map(product => {
                const {id, period, img, type, description, size, price} = product;
                return (
                    <div key={id} className="cart-product-item">
                        <h5>{period}</h5>
                        <img width="150px" src={img} alt="product" />
                        <h4>{type}</h4>
                        <p>{description}</p>
                        <h5>{size}</h5>
                        <h4>{price}$</h4>
                    </div>
                );
            })}
        </div>
    );
}

export default CartProduct;
