import React, { useState, useEffect } from 'react';
import { productsList, detailsProduct } from './productsData';


const ProductsContext = React.createContext();

function ProductsProvider(props) {

    const [products, setProducts] = useState({
        productsListCopy: [],
        detailsProduct,
        cart: []
    });

    let [modal, setModal] = useState(false);

    const [totalPrice, setTotalPrice] = useState({
        subTotal: 0,
        cartTax: 0,
        cartTotal: 0
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
        addTotal();
    }

    const openModal = () => {
        setModal(() => true);
        setTimeout(() => {
            setModal(() => false);
        },3000);
    }
    
    const increment = id => {
        console.log(`this is the increment method ${id}`);
        
    }

    const decrement = id => {
        console.log(`this is the decrement method ${id}`);

    }

    const removeItem = id => {
        console.log(`item removed ${id}`);
    }

    const addTotal = () => {
        let subtotal = 0;
        products.cart.map(product => (subtotal += product.total));
        const getTax = subtotal * 0.1;
        const tax = parseFloat(getTax.toFixed(2));
        const total = subtotal + tax;
        setTotalPrice(() => {
            return {
                subTotal: subtotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    }

    const clearCart = () => {
        setProducts(() => {
            return {
                ...products,
                cart: []
            }
        });
    }

    return (
        <ProductsContext.Provider value={{
            ...products,
            totalPrice,
            handleDetails,
            addToCart,
            openModal,
            modal,
            increment,
            decrement,
            removeItem,
            clearCart
        }}>
            {props.children}
        </ProductsContext.Provider>
    );
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsProvider, ProductsConsumer }
