import React, { useState } from 'react';
import { productsList } from './productsData';

const undefinedProducts = [
    {
        name: "kilwa",
        age: 22,
        legal: true,
        props: "hunter"
    },
    {
        name: "gon frekis",
        age: 21,
        legal: true,
        props: "hunter"
    },
    {
        name: "korabica",
        age: 27,
        legal: true,
        props: "spider killer"
    }
];

const ProductsContext = React.createContext();

function ProductsProvider(props) {

    const [products] = useState({
        productsList,
        undefinedProducts
    });

    const handleDetails = () => {
        console.log('hello from handle details context component');
    }

    const addToCart = () => {
        console.log('hello from add to cart context component');
    }

    return (
        <ProductsContext.Provider value={{
            ...products,
            handleDetails,
            addToCart
        }}>
            {props.children}
        </ProductsContext.Provider>
    );
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsProvider, ProductsConsumer }
