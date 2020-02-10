import React, { useState, useEffect } from 'react';
import { productsList, detailsProduct } from './productsData';


const ProductsContext = React.createContext();

function ProductsProvider(props) {

    const [products, setProducts] = useState({
        productsListCopy: [],
        detailsProduct,
        cart: []
    });

    useEffect(() => {
        setNewProductsList();
    },[]);

    const setNewProductsList = () => {
        let newProductsCopy = [];
        productsList.map(item => {
            const productItem = {...item}
            return newProductsCopy = [...newProductsCopy, productItem];
        });
        setProducts(() => {
            return {
                ...products,
                productsListCopy:newProductsCopy
            }
        });
    }

    const getItem = id => {
        return products.productsListCopy.find(item => item.id === id);
    }

    const handleDetails = (id) => {
        const product = getItem(id);
        setProducts(() => {
            return {
                ...products,
                detailsProduct: product
            }
        });
    }

    const addToCart = id => {
        const index = products.productsListCopy.indexOf(getItem(id));
        const productToAdd = products.productsListCopy[index];
        productToAdd.inCart = true;
        productToAdd.count = 1; 
        productToAdd.total = productToAdd.price;
        setProducts(() => {
            return {
                ...products,
                cart: [...products.cart, productToAdd]
            }
        });
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
