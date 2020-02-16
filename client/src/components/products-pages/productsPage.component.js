import React from 'react';
import { ProductsConsumer } from '../../context';

function ProductsPage() {

    return(
        <div className="products-page">
            <h2 style={{marginTop:"8em", color:"#86d"}}>
                THIS IS THE PRODUCTS PAGE 
            </h2>
            <ProductsConsumer>
                {(value) => {
                    const { productsPage } = value;
                    
                    return productsPage.map(product => {
                        return (
                            <div key={product.id} className="products-page-list">
                                <h3>{product.type}</h3>
                                <img width="120px" src={product.img} alt="product"></img>
                            </div>
                        );
                    });
                }}
            </ProductsConsumer>
        </div>
    );
}

export default ProductsPage;
