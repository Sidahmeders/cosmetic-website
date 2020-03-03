import React, { useContext } from 'react';
import { ContextConsumer } from '../context';


function Details() {

    const context = useContext(ContextConsumer);
    const {id, period, img, type, description, size, price, inCart} = context.detailsProduct;

    return (
        <div className="details">
            <h1 style={{marginTop:"40vh"}}>Details component</h1>     
            <div className="details-product">
                <div className="product-item">
                    <h5>{period}</h5>
                    <img width="180px" src={img} alt="product" />
                    <div className="text">
                        <span>{type}</span>
                        <p>{description}</p>
                        <span>{size}</span>
                    </div>
                    <h4>{price}$</h4>
                    <button disabled={inCart} onClick={() => {context.addToCart(id)}}>
                        {inCart ? (<p>in Cart</p>) : (<p>add to the Cart</p>)}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
