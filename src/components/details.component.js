import React, { useContext } from 'react';
import { ContextConsumer } from '../context';
import '../styles/details/details.css';


function Details() {

    const context = useContext(ContextConsumer);
    const {id, rank, img, type, description, size, price, brand, inCart} = context.detailsProduct;

    return (
        <div className="details">  
            <div className="product-item">
                <span className="brand">{brand}</span>
                <h5>{rank}</h5>
                <p>{type}</p>
                <img width="180px" src={img} alt="product" />
                <div className="text">
                    <p>{description}</p>
                    <p>{size}</p>
                </div>
                <h4>{price.toFixed(2)}$</h4>
                <button disabled={inCart} onClick={() => {context.addToCart(id)}}>
                    {inCart ? (<p>in Cart</p>) : (<p>add to the Cart</p>)}
                </button>
            </div>
        </div>
    );
};

export default Details;
