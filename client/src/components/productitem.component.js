import React from 'react';
import PropTypes from 'prop-types';


function Product(props) {

    const {id, period, img, type, description, size, price, inCart} = props.product;

    return (
        <div className="product">
            <div style={{cursor:'pointer'}} onClick={() => props.handleDetail(id)} className="product-item">
                <h5>{period}</h5>
                <img width="180px" src={img} alt="product"/>
                <h4>{type}</h4>
                <p>{description}</p>
                <h5>{size}</h5>
                <h4>{price}$</h4>
                <button className="btn" disabled={inCart}>
                    {inCart ? (<p className="btn-inCart">in cart</p>) : 
                    <p className="btn-addtoCart">add to the cart</p>}   
                </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        period: PropTypes.string,
        img: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
        size: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

export default Product;
