import React, { useContext } from 'react';
import { ContextConsumer } from '../../context';
import Product from './productitem.component';
import '../../styles/products-list/product-list-item.css';


function ProductsList() {

    const context = useContext(ContextConsumer);

    return (
        <div className="products-list">
            <div className="product">

                {context.productsListCopy.map(product => {
                    return <Product key={product.id} 
                            product={product} 
                            handleDetail={context.handleDetails}
                            addToCart={context.addToCart}
                            openModal={context.openModal}
                            />
                    })
                }
            </div>
        </div>
    );
};

export default ProductsList;