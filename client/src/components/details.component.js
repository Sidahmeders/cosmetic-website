import React from 'react';
import { ProductsConsumer } from '../context';


function Details() {

    return (
        <div className="details">
            <h1 style={{marginTop:"40vh"}}>Details component</h1>
            <ProductsConsumer>
                {(value) => {
                    const {id, period, img, type, description, size, price, inCart} = value.detailsProduct;
                    return (
                        <div className="details-product">
                            <div className="product-item">
                                <a className="detail" href="kings">
                                    <h5>{period}</h5>
                                    <img width="180px" src={img} alt="product" />
                                    <div className="text">
                                        <span>{type}</span>
                                        <p>{description}</p>
                                        <span>{size}</span>
                                    </div>
                                </a>
                                <h4>{price}$</h4>
                                <button disabled={inCart} onClick={() => {value.addToCart(id); value.handleDetails(id)}}>
                                    {inCart ? (<p>in Cart</p>) : (<p>add to the Cart</p>)}
                                </button>
                            </div>
                        </div>
                    );
                }}
            </ProductsConsumer>
        </div>
    );
};

export default Details;
