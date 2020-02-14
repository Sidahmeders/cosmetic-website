import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';


function CartTotal(props) {

    const {addTotal, clearCart, cart} = props.value;
    const {subTotal, cartTax, cartTotal} = props.totalPrice;
    const productName = cart.map(item => item.type).toString();
    const location = useLocation();

    useEffect(() => {
        addTotal();
    },[location.pathname]);

    const handleToken = (token, address) => { console.log({token, address}); }
    
    return(
        <div className="cart-Total">
            <div className="total-price">
                <h2>subTotal: {subTotal}$</h2>
                <h3>cartTax: {cartTax}$</h3>
                <h2>Total: {cartTotal}$</h2>
                <button onClick={() => clearCart()}>clear the cart</button>
            </div>   
            <StripeCheckout stripeKey="pk_test_CMCXgPpoZEsrGyGpR7XdKnLL00eUaQ4SFc" token={handleToken}
            className="stripe-btn" billingAddress shippingAddress amount={cartTotal * 100} name={productName}
            /> 
        </div>
    );
}

export default CartTotal;
