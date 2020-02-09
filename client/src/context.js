import React, { useState, useEffect } from 'react';
import { productsList, detailsProduct } from './productsData';


const ProductsContext = React.createContext();

function ProductsProvider(props) {

    const [products, setProducts] = useState({
        productsListCopy: [],
        detailsProduct
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
                productsListCopy:newProductsCopy,
                detailsProduct
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
                productsListCopy:products.productsListCopy,
                detailsProduct: product
            }
        });
        //! remove
        console.log(products);
    }

    const addToCart = id => {
        console.log(`hello from add to cart ${id}`);
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
