import React, { useEffect } from 'react';
import { useLocation } from 'react-router';


function CartTotal(props) {

    const {addTotal} = props.value;

    const location = useLocation();
    useEffect(() => {
        addTotal();
    },[location.pathname]);

    
    const {subTotal, cartTax, cartTotal} = props.totalPrice;
    return(
        <div className="cart-Total">
            <h2>subTotal: {subTotal}</h2>
            <h3>cartTax: {cartTax}</h3>
            <h2>Total: {cartTotal}</h2>
        </div>
    );
}

export default CartTotal;
