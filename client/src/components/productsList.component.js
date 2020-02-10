import React from 'react';
import { ProductsConsumer } from '../context';
import Product from './productitem.component';
import '../styles/product-list-item.css';


function ProductsList() {

    return (
        <div className="products-list">
            <h1>products List component</h1>
            <div className="product">
                <ProductsConsumer>
                    {(value) => {
                        const handleDetails = value.handleDetails;
                        const addToCart = value.addToCart;
                        return value.productsListCopy.map(product => {
                            return <Product key={product.id} 
                            product={product} 
                            handleDetail={handleDetails}
                            addToCart={addToCart} 
                            />
                        });
                    }}
                </ProductsConsumer>
            </div>
        </div>
    );
};

export default ProductsList;