import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/products-linkPage/productsLinkPage.css'
import { ContextConsumer } from '../../context';


function ProductsLinkPage() {

    const context = useContext(ContextConsumer);
    const { filterPages, onTypeChange, productType, productsLinkPage, handleDetails } = context;
    const { linkOf, brandOf } = JSON.parse(localStorage.getItem('pageLink'));
    const {one, two, three, four } = productType[linkOf];

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
    productsLinkPage.map(p => minPrice = p.price >= minPrice ? minPrice : p.price);
    productsLinkPage.map(p => maxPrice = p.price <= maxPrice ? maxPrice : p.price);
    
    useEffect(() => { 
        filterPages(linkOf, brandOf, price.minPrice, price.maxPrice, productType);
    }, [productType]);

    const onRankChange = e => {
        filterPages(linkOf, brandOf, price.minPrice, price.maxPrice, productType, e.target.value);
    };


    return(
        <div className="products-link-page">
            <div className="side-bar">
                <div className="select-box">
                    <h3>Rank by status</h3>
                    <select onChange={onRankChange}>
                        <option value="new">the latest</option>
                        <option value="best seller">the best Seller</option>
                        <option value="popular">the most popular</option>
                    </select>
                </div>
                <div className="multi-range-slider">
                    <h3>Price</h3>
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
                        <input type="checkbox" id="one" value={one} onChange={onTypeChange} />
                        <label htmlFor="one">{one ? one : "add back"}</label>
                    </p>
                    <p>
                        <input type="checkbox" id="two" value={two} onChange={onTypeChange} />
                        <label htmlFor="two">{two ? two : "add back"}</label>
                    </p>
                    <p>
                        <input type="checkbox" id="three" value={three} onChange={onTypeChange} />
                        <label htmlFor="three">{three ? three : "add back"}</label>
                    </p>
                    <p>
                        <input type="checkbox" id="four" value={four} onChange={onTypeChange} />
                        <label htmlFor="four">{four ? four : "add back"}</label>
                    </p>
                </div>
                <h1>{brandOf}</h1>
            </div>

            <div className="products-list">
                {productsLinkPage.length ? productsLinkPage.map(product => {
                    const {id, img, type, description, size, price} = product;
                    const classOf = product.class;
                    return (
                        <div key={product.id} className="products-list-item">
                            <Link className="detail" onClick={() => handleDetails(id)} to="/details">
                                <h5>{classOf}</h5>
                                <img src={img} alt="product"></img>
                                <div className="text">
                                    <span>{type}</span>
                                    <p>{description}</p>
                                    <span>{size}</span>
                                </div>
                            </Link>
                            <h4 className="price">{price.toFixed(2)}$</h4>
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
