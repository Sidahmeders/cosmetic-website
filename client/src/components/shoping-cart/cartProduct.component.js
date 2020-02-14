import React from 'react';


function CartProduct(props) {

    const {changeQuantity, removeItem} = props.value;
    
    return(
        <div className="cart-products">
            {props.products.map(product => {
                const {id, period, img, type, description, size, price, count} = product;
                return (
                    <div key={id} className="cart-product-item">
                        <h5>{period}</h5>
                        <img width="150px" src={img} alt="product" />
                        <h4>{type}</h4>
                        <p>{description}</p>
                        <h5>{size}</h5>
                        <h4>{(price * count).toFixed(2)}$</h4>
                        <p>count: {count}</p>
                        <button onClick={() => changeQuantity(id, 'add')}>inc +</button>
                        <button onClick={() => changeQuantity(id, 'reduce')}>dec +</button>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
        </div>
    );
}

export default CartProduct;
