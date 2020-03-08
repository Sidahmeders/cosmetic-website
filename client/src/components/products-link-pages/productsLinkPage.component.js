import React, { useState, useContext, useEffect } from 'react';
import '../../styles/products-linkPage/productsLinkPage.css'
import { ContextConsumer } from '../../context';


function ProductsLinkPage() {

    const context = useContext(ContextConsumer);
    const { filterPages, onTypeChange } = context;
    const productsList = JSON.parse(localStorage.getItem('productsList'));
    const { linkOf, brandOf } = JSON.parse(localStorage.getItem('pageLink'));

    const range = document.querySelector('.range');
    const leftThumb = document.querySelector('.thumb.left');
    const rightThumb = document.querySelector('.thumb.right');

    const [price, setPrice] = useState({
        minPrice: 1,
        maxPrice: 100
    });

    const setLeftValue = e => {
        setPrice({
            ...price,
            minPrice: Math.min(parseInt(e.target.value), parseInt(price.maxPrice) - 1)
        });
        leftThumb.style.left = price.minPrice + "%";
        range.style.left = price.minPrice + "%";
        filterPages(linkOf, brandOf, price.minPrice, price.maxPrice);
    };

    const setRightValue = e => {
        setPrice({
            ...price,
            maxPrice: Math.max(parseInt(e.target.value), parseInt(price.minPrice) + 1)
        });
        rightThumb.style.right = (100 - price.maxPrice) + "%";
        range.style.right = (100 - price.maxPrice) + "%";
        filterPages(linkOf, brandOf, price.minPrice, price.maxPrice);
    };

    let minPrice;
    let maxPrice;
    productsList.map(p => minPrice = p.price >= minPrice ? minPrice : p.price);
    productsList.map(p => maxPrice = p.price <= maxPrice ? maxPrice : p.price);
    
    useEffect(() => { 
        return () =>  filterPages(linkOf, brandOf, price.minPrice, price.maxPrice);
    }, [onTypeChange]);


    return(
        <div className="products-link-page">
            
            <div className="side-bar">
                <div className="multi-range-slider">
                    <h2 style={{margin:"10px", letterSpacing:"3px"}}>Price</h2>
                    <input type="range" min="1" max="100" value={price.minPrice} 
                    id="input-left" onChange={setLeftValue} />
                    <input type="range" min="1" max="100" value={price.maxPrice} 
                    id="input-right" onChange={setRightValue} /> 

                    <div className="slider">
                        <div className="track"></div>
                        <div className="range"></div>
                        <div className="thumb left">
                            <span>{minPrice ? minPrice : 0}$</span>
                        </div>
                        <div className="thumb right">
                            <span>{maxPrice ? maxPrice : 0}$</span>
                        </div>
                    </div>
                </div>

                <div className="check-boxes">
                    <h3>Filter by Type</h3>
                    <p>
                      <input id="shampoo" type="checkbox" value="shampoo" onChange={onTypeChange} />
                      <label htmlFor="shampoo">shampoo</label>
                    </p>
                    <p>
                      <input id="conditioner" type="checkbox" value="conditioner" onChange={onTypeChange} />
                      <label htmlFor="conditioner">conditioner</label>
                    </p> 
                    <p>
                      <input id="hairMask" type="checkbox" value="hair mask" onChange={onTypeChange} />
                      <label htmlFor="hairMask">hair mask</label>
                    </p>
                </div>
                <div className="select-box">
                    <select>
                        <option>the latest</option>
                        <option>the best Seller</option>
                        <option>the most popular</option>
                    </select>
                </div>
                <h1>{brandOf}</h1>
            </div>
            <div className="products-list">
                {productsList.length ? productsList.map(product => {
                    return (
                        <div key={product.id} className="products-list-item">
                            <p>{product.type}</p>
                            <img src={product.img} alt="product"></img>
                        </div>
                    );
                }) :
                (<div>
                    <h1 style={{position:"absolute",left:"40%",top:"50%"}}>no products has been selected</h1>
                </div>)
                }
            </div>

        </div>
    );
};

export default ProductsLinkPage;
