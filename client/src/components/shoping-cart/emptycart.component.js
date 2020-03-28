import React from 'react';
import { Link } from 'react-router-dom';


function EmptyCart() {

    return(
        <div className="empty-cart">
            <div className="empty-cart-container">
                <h1>your cart is empty for now</h1>
                <h2>please Check the Links or the home Page</h2>
                <p>
                    <Link to="/">
                    <i id="fa" className="fa fa-th-list"></i>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default EmptyCart;
