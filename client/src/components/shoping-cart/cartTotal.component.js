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
            <div className="cart-Total-container">
                <div className="info">
                    <h3>Secure payment with</h3>
                    <p><i className="fab fa-cc-visa"></i> <i className="fab fa-cc-paypal"></i></p>
                    <p><i className="fab fa-cc-mastercard"></i> <i className="fab fa-cc-stripe"></i></p>
                </div>
                <div className="total-price">
                    <p>sub: <span>{subTotal}$</span></p>
                    <p>Tax: <span>{cartTax}$</span></p>
                    <p>Total: <span>{cartTotal}$</span></p>
                </div>
                <StripeCheckout stripeKey="pk_test_CMCXgPpoZEsrGyGpR7XdKnLL00eUaQ4SFc" token={handleToken}
                  billingAddress shippingAddress amount={cartTotal * 100} name={productName}>
                    <button className="StripeElement">finalize my order</button>
                </StripeCheckout>
                <button className="clear-cart" onClick={() => clearCart()}>clear the cart</button>
            </div>
        </div>
    );
}

export default CartTotal;
