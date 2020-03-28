import React from 'react';


function CartProduct(props) {

    const {changeQuantity, removeItem} = props.value;
    
    return(
        <div className="cart-products">
            {props.products.map(product => {
                const {id, img, size, price, count, brand} = product;
                const classOf = product.class;
                return (
                    <div key={id} className="cart-products-item">
                        <section className="image">
                            <h4>{brand +" "+ classOf}</h4>
                            <img src={img} alt="product"/>
                            <h4>{size}</h4>
                            <p>{price}$</p>
                        </section>
                        <section className="info">
                            <div className="description">
                                <h4>{(price * count).toFixed(2)}$</h4>
                                <p>Quantity: <span>{count}</span></p>
                            </div>
                            <div className="buttons">
                                <button onClick={() => changeQuantity(id, 'add')}>increase +</button>
                                <button onClick={() => changeQuantity(id, 'reduce')}>decrease +</button>
                                <button onClick={() => removeItem(id)}>remove</button>
                            </div>
                        </section>
                    </div>
                );
            })}
        </div>
    );
}

export default CartProduct;
