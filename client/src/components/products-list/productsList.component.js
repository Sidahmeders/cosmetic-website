import React from 'react';
import { ProductsConsumer } from '../../context';
import Product from './productitem.component';
import '../../styles/products-list/product-list-item.css';


function ProductsList() {

    return (
        <div className="products-list">
            <div className="product">
                <ProductsConsumer>
                    {(value) => {
                        return value.productsListCopy.map(product => {
                            return <Product key={product.id} 
                            product={product} 
                            handleDetail={value.handleDetails}
                            addToCart={value.addToCart}
                            openModal={value.openModal}
                            />
                        });
                    }}
                </ProductsConsumer>
            </div>
        </div>
    );
};

export default ProductsList;