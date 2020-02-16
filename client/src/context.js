import React, { useState, useEffect } from 'react';
import { productsList, detailsProduct } from './productsData';


const ProductsContext = React.createContext();

function ProductsProvider(props) {

    const [products, setProducts] = useState({
        productsListCopy: [],
        detailsProduct,
        cart: [],
        productsPage: []
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
    }

    const openModal = () => {
        setModal(() => true);
        setTimeout(() => {
            setModal(() => false);
        },3000);
    }

    const changeQuantity = (id, type) => {
        const productToChangeQuant = products.cart.find(product => product.id === id);
        if(type === "add") {
            productToChangeQuant.count ++;
        } else if(type === "reduce") {
            if(productToChangeQuant.count > 1) {
                productToChangeQuant.count --;
            } else {
                console.log('you better remove it');
            }
        }
        productToChangeQuant.total = productToChangeQuant.count * productToChangeQuant.price;
        addTotal();
        return;
    }

    const removeItem = id => {
        const productToRemove = products.cart.find(product => product.id === id);
        productToRemove.count = 0;
        productToRemove.total = 0;
        productToRemove.inCart = false;
        const newCart = products.cart.filter(product => product.id !== productToRemove.id);
        setProducts(() => {
            return {
                ...products,
                cart: newCart
            }
        });
        addTotal();
    }

    const addTotal = () => {
        let subtotal = 0;
        products.cart.map(product => (subtotal += product.total));
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        setTotalPrice(() => {
            return {
                subTotal: subtotal.toFixed(2),
                cartTax: tax.toFixed(2),
                cartTotal: total.toFixed(2)
            }
        });
    }

    const clearCart = () => {
        products.cart.map(product => {
            product.count = 0;
            product.total = 0;
            product.inCart = false;
        });
        setProducts(() => {
            return {
                ...products,
                cart: []
            }
        });
    }

    const filterPages = (classOf, brandOf, targetOf) => {
        const productList = products.productsListCopy;
        const linkProducts = productList.filter(product => product.class === classOf && product.brand === brandOf);
        console.log(linkProducts);
        setProducts(() => {
            return {
                ...products,
                productsPage: linkProducts
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
            addTotal,
            modal,
            changeQuantity,
            removeItem,
            clearCart,
            filterPages
        }}>
            {props.children}
        </ProductsContext.Provider>
    );
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsProvider, ProductsConsumer }
