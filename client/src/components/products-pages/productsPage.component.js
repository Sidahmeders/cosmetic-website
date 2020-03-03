import React, { useContext } from 'react';
import { ContextConsumer } from '../../context';

function ProductsPage() {

    const context = useContext(ContextConsumer);
    const { productsPage } = context;

    return(
        <div className="products-page">
            <h2 style={{marginTop:"8em", color:"#86d"}}>
                THIS IS THE PRODUCTS PAGE 
            </h2>
            {productsPage.map(product => {
                return (
                    <div key={product.id} className="products-page-list">
                        <h3>{product.type}</h3>
                        <img width="120px" src={product.img} alt="product"></img>
                    </div>
                );
             })
            }
        </div>
    );
}

export default ProductsPage;
