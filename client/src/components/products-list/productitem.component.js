import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Product(props) {

    const {id, period, img, type, description, size, price, inCart} = props.product;

    return (
        <div className="product-item">
            <div className="item" style={{cursor:'pointer'}} onClick={() => props.handleDetail(id)}>
                <Link to="/details">
                    <h5>{period}</h5>
                    <img width="180px" src={img} alt="product"/>
                    <h4>{type}</h4>
                    <p>{description}</p>
                    <h5>{size}</h5>
                    <h4>{price}$</h4>
                </Link>
            </div>
            <button className="btn" disabled={inCart} onClick={() => {props.addToCart(id); props.openModal();}}>
            {inCart ? (<p>in Cart</p>) : <p>add to the Cart</p>}   
            </button>
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
