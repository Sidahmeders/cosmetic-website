import React from 'react';


function Product(props) {

    const {id, period, img, type, description, size, price, inCart} = props.product;

    return (
        <div className="product">
            <div key={id} className="product-item">
                <h5>{period}</h5>
                <img width="180px" src={img} alt="product"/>
                <h4>{type}</h4>
                <p>{description}</p>
                <h5>{size}</h5>
                <h4>{price}$</h4>
                <button className="btn" disabled={inCart ? true : false}>
                    {inCart ? (<p className="btn-inCart">in cart</p>) : 
                    <p className="btn-addtoCart">add to the cart</p>}   
                </button>
            </div>
        </div>
    );
}

export default Product;
