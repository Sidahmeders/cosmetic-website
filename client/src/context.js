import React, { useState, useEffect } from 'react';
import { productsList, detailsProduct } from './productsData';


const ProductsContext = React.createContext();

function ContextProvider(props) {

    const [products, setProducts] = useState({
        productsListCopy: [],
        detailsProduct,
        cart: [],
        productsLinkPage: []
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
    };

    const getItem = id => {
        return products.productsListCopy.find(item => item.id === id);
    };

    const handleDetails = (id) => {
        const product = getItem(id);
        setProducts(() => {
            return {
                ...products,
                detailsProduct: product
            }
        });
    };

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
    };

    const openModal = () => {
        setModal(() => true);
        setTimeout(() => {
            setModal(() => false);
        },3000);
    };

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
    };

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
    };

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
    };

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
    };

    const productType = {
        hair: {
            one: "shampoo",
            two: "conditioner",
            three: "hair mask",
            four: "collection"
        },
        body: {
            one: "showerGel",
            two: "bodyLotion",
            three: "bodyCreme",
            four: "TALCUM"
        },
        creme: {
            one: "beauty creme",
            two: "scrub&mask",
            three: "face lotion",
            four: "sun creme"
        }
    };

    const [productTypeCopy, setProductTypeCopy] = useState({
        ...productType
    });

    const onTypeChange = e => {
        const { linkOf } = JSON.parse(localStorage.getItem('pageLink'));

        console.log(productTypeCopy[linkOf][e.target.id])

        if(!e.target.checked) {
            setProductTypeCopy({
                ...productTypeCopy,
                [linkOf]: {
                    ...productTypeCopy[linkOf],
                    [e.target.id]: productType[linkOf][e.target.id]
                }
            });
        } else {
            setProductTypeCopy({
                ...productTypeCopy,
                [linkOf]: {
                    ...productTypeCopy[linkOf],
                    [e.target.id]: undefined
                } 
            });
        }
    };

    const filterPages = (linkOf = 'hair', brandOf, minPrice = 1, maxPrice = 100, classOf = productTypeCopy, rank = 'new') => {
        const linkProducts = products.productsListCopy.filter(p => {
            return p.link === linkOf && p.brand === brandOf
            && p.price > minPrice/2 && p.price < maxPrice/2;
        });

        const {one, two, three, four} = classOf[linkOf];
        const filteredProducts = linkProducts.filter(p => {
            return p.class === one || p.class === two || p.class === three || p.class === four;
        });
        const rankedProducts = filteredProducts.sort((a, b) => {
            return (a.rank && b.rank === rank) ? 1 : -1 ;
        });

        const pageLink = JSON.stringify({linkOf, brandOf});
        localStorage.setItem('pageLink', pageLink);
        setProducts(() => {
            return {
                ...products,
                productsLinkPage: rankedProducts
            }
        });
    };
    
    
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
            filterPages,
            onTypeChange,
            productTypeCopy
        }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

const ContextConsumer = ProductsContext;

export { ContextProvider, ContextConsumer }
