import React from 'react';
import { ProductsConsumer } from '../context';
import Product from './productitem.component';
import '../styles/product-list-item.css';


function ProductsList() {

    return (
        <div className="products-list">
            <h1>products List component</h1>
            <div className="products">
                <ProductsConsumer>
                    {(products) => {
                        return products.productsList.map(product => {
                            return <Product key={product.id} product={product} />
                        });
                    }}
                </ProductsConsumer>
            </div>
        </div>
    )
}

export default ProductsList;