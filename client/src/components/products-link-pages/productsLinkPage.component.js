import React, { useContext } from 'react';
import '../../styles/products-linkPage/productsLinkPage.css'
import { ContextConsumer } from '../../context';


function ProductsLinkPage() {

    const context = useContext(ContextConsumer);
    const { productsPage, priceFilter, setPriceFilter } = context;
    
    const range = document.querySelector('.range');
    const leftThumb = document.querySelector('.thumb.left');
    const rightThumb = document.querySelector('.thumb.right');

    const setLeftValue = e => {
        setPriceFilter({
            ...priceFilter,
            minPrice: Math.min(parseInt(e.target.value), parseInt(priceFilter.maxPrice) - 1)
        });
        leftThumb.style.left = priceFilter.minPrice + "%";
        range.style.left = priceFilter.minPrice + "%";
    };

    const setRightValue = e => {
        setPriceFilter({
            ...priceFilter,
            maxPrice: Math.max(parseInt(e.target.value), parseInt(priceFilter.minPrice) + 1)
        });
        rightThumb.style.right = (100 - priceFilter.maxPrice) + "%";
        range.style.right = (100 - priceFilter.maxPrice) + "%";
    };

    console.log( priceFilter.minPrice, priceFilter.maxPrice);

    return(
        <div className="products-link-page">
            <h2 style={{marginTop:"8em", color:"#86d"}}>THIS IS THE PRODUCTS PAGE</h2>

            <div className="multi-range-slider">
                <h3 style={{margin:"10px"}}>Price</h3>
                <input type="range" min="1" max="100" value={priceFilter.minPrice} id="input-left" onChange={setLeftValue} />
                <input type="range" min="1" max="100" value={priceFilter.maxPrice} id="input-right" onChange={setRightValue} /> 

                <div className="slider">
                    <div className="track"></div>
                    <div className="range"></div>
                    <div className="thumb left">
                        <span>{(priceFilter.minPrice/2).toFixed(2)}$</span>
                    </div>
                    <div className="thumb right">
                        <span>{(priceFilter.maxPrice/2).toFixed(2)}$</span>
                    </div>
                </div>
            </div>

            <div>
                <input type="checkbox" />
                <label>shampoo</label>
                <br />
                <input type="checkbox" />
                <label>conditioner</label>
                <br />
                <input type="checkbox" />
                <label>hair mask</label>
            </div>
            <select>
                <option>the latest</option>
                <option>the best Seller</option>
                <option>the most popular</option>
            </select>
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
};

export default ProductsLinkPage;
