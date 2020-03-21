import React, { useState, useContext } from 'react';
import '../styles/home/home.css';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { ContextConsumer } from '../context';
import { Link } from 'react-router-dom';

import brushes from '../cos-img/lipstick-liq.jpg';
import lips from '../cos-img/lips.jpg';
import pallete from  '../cos-img/pallete.jpg';
import varni from '../cos-img/nailpol.jpg';
import redlipstick from '../cos-img/redlipstick.jpg';
import perf from '../cos-img/lamis.jpg';
import hairbrush from '../cos-img/hairbrush.jpg';

import blushOne from '../cos-img/product-img/products/makeup/blusher/blush (5).jpg';
import blushTwo from '../cos-img/product-img/products/makeup/blusher/blush (28).jpg';
import blushThree from '../cos-img/product-img/products/makeup/blusher/blush (35).jpg';
import hairOne from '../cos-img/product-img/products/shampoo/TRESemme/hair (1).jpg';
import hairTwo from '../cos-img/product-img/products/shampoo/garnier/hair (37).jpg';
import hairThree from '../cos-img/product-img/products/shampoo/provost/hair (1).jpg';
import hairFour from '../cos-img/product-img/products/shampoo/loreal/hair (25).jpg';
import hairFive from '../cos-img/product-img/products/shampoo/loreal/hair (31).jpg';
import suncremeOne from '../cos-img/product-img/products/faceCreme/sun-creme/sunCreme (6).jpg';
import makeupOne from '../cos-img/product-img/products/makeup/bridal-makeup/makeup (6).jpg';
import lipOne from '../cos-img/product-img/products/makeup/lipStick/lips (7).jpg';
import faceCremeOne from '../cos-img/product-img/products/faceCreme/face-creme/creme (2).jpg';



const  Home = () => {

    const context = useContext(ContextConsumer);
    const {handleDetails} = context;

    const [swiper1, updateSwiper1] = useState(null);
    const [swiper2, updateSwiper2] = useState(null);
    const [swiper3, updateSwiper3] = useState(null);

    const next1 = () => {
        if (swiper1 !== null) {
          swiper1.slideNext();
        }
      };
      const prev1 = () => {
        if (swiper1 !== null) {
          swiper1.slidePrev();
        }
      };

    const next2 = () => {
        if (swiper2 !== null) {
          swiper2.slideNext();
        }
      };
      const prev2 = () => {
        if (swiper2 !== null) {
          swiper2.slidePrev();
        }
      };

    const next3 = () => {
        if (swiper3 !== null) {
          swiper3.slideNext();
        }
      };
     
      const prev3 = () => {
        if (swiper3 !== null) {
          swiper3.slidePrev();
        }
      };

        
    return (
        <div className="home">
            <header>

                <div className="slide-container">
                    <div className="slider">
                        <div className="slide slide1">
                            <div className="undefined">
                                <a href="/">x</a>
                            </div>
                        </div>
                        <div className="slide slide2">
                            <div className="undefined">
                                <a href="/">x</a>
                            </div>
                        </div>
                        <div className="slide slide3">
                            <div className="undefined">
                            <a href="/">x</a>
                            </div>
                        </div>
                        <div className="slide slide1">
                            <div className="undefined">
                            <a href="/">x</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="head-intro">
                    <div className="square"></div>
                    <div className="text">
                        <h1>the Home where every Woman wants to be</h1>
                        <h2>
                            let your beauty Shines through the day 
                            <span style={{fontSize:".8em",color:"#85d"}}> be the queen</span>
                        </h2>
                        <a href="/">SHOP NOW</a>
                    </div> 
                    <div className="image">
                        <img src={brushes} alt="brushes" />
                    </div>
                </div>
                <div className="head-body">
                    <div className="image">
                        <img src={lips} alt="lips"/>
                    </div>
                    <div className="text">
                        <p>
                        Discover COSMETICA, the 1st retail shop of cosmetic products in Chlef, with
                        our best influencer from L'ORAL PARIS to unilever and Ab reseller and many more.
                        </p>
                    </div>
                </div>

            </header>

            <main>

                <div className="main-products">
                    <section className="slider-section">
                        <button className="pre" onClick={prev1}><i className="fa fa-angle-left"></i></button>
                        <Swiper getSwiper={updateSwiper1}>
                        <div className="slide">
                            <div className="slide-item">
                                <div>
                                    <a href="/">
                                            <img src={pallete} alt="pallete"/>
                                            <p className="pallete-text">
                                                the bestseller in eyeshadow palettes on Amazon
                                                <span style={{color:"#91f",fontSize:".6em"}}> 2020</span>
                                                <br />
                                                <span style={{color:"#777",fontSize:".7em"}}> available for only 14$</span>
                                            </p>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-item">
                                <div>
                                    <a href="/">
                                        <img src={redlipstick} alt="redlipstick"/>
                                        <p className="red-lipstick">
                                                Our rich, vivid, perfectly matte lip color
                                        </p>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-item">
                                <div>
                                    <a href="/">
                                        <img src={varni} alt="varni"/>
                                        <p className="varni">
                                            it only requires two steps from being the one, <span>Wear</span> and <span>Shine</span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-item">
                                <div>
                                    <a href="/">
                                        <img src={perf} alt="perfume"/>
                                        <p className="perf">
                                                the one fragrance that deserve to<span> lead </span>all<span> man </span>and woman
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-item">
                                <div>
                                    <a href="/">
                                        <img src={hairbrush} alt="hairbrush"/>
                                        <p className="drayer">
                                            This smart tool is perfect for refreshing your hair between shampoos
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </Swiper>
                        <button className="next" onClick={next1}><i className="fa fa-angle-right"></i></button>
                    </section>

                    <section className="whats-new-section">
                        <h2>Discover What's New</h2>
                        <div className="new-products">
                            <button className="pre" onClick={prev2}><i className="fa fa-angle-left"></i></button>
                            <Swiper getSwiper={updateSwiper2}>
                            <div className="products-slide one">
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                        <h5>New</h5>
                                        <img src={faceCremeOne} alt="cremeOne"/>
                                        <div className="text">
                                            <span>Night creme</span>
                                            <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                            <span>85ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">12.75$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(2)} to="/details">
                                        <h5>try me</h5>
                                        <img src={blushOne} alt="blushOne"/>
                                        <div className="text">
                                            <span>Sephora Blusher</span>
                                            <p>Whether you choose rose or peachy, blush up your cheeks with Sephora</p>
                                            <span>30ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">6.30$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(3)} to="/details">
                                        <h5>New</h5>
                                        <img src={suncremeOne} alt="sunCreme"/>
                                        <div className="text">
                                        <span>sun protection</span>
                                        <p>Diasaar sun creme for ultimate protection from the uva and uvb sun light</p>
                                        <span>95ml / 135ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">10.50$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(4)} to="/details">
                                        <h5>grab me</h5>
                                        <img src={hairTwo} alt="hairTwo"/>
                                        <div className="text">
                                            <span>Garnier shampo</span>
                                            <p>ulraDoux shampo avocado oil, argan oil & hony, green tea, flower cotton</p>
                                            <span>250ml / 400ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">5.25$</h4>
                                </div>
                            </div>
                            
                            <div className="products-slide two">
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(12)} to="/details">
                                        <h5>new</h5>
                                        <img src={hairThree} alt="hairThree" />
                                        <div className="text">
                                            <span>shampo</span>
                                            <p>PROvost shampo condtioner and serum for frizzy, dry and lost colored hair </p>
                                            <span>750ml/ 7500ml/ 300ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">14.10$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(9)} to="/details">
                                        <h5>take me</h5>
                                        <img src={hairFour} alt="hairFour" />
                                        <div className="text">
                                            <span>shampo & oil repleacement</span>
                                            <p>the new collection from elseve for tinted, or bleached and dry hair with keratin</p>
                                            <span>150ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">11.20$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(10)} to="/details">
                                        <h5>try me</h5>
                                        <img src={hairFive} alt="hairFive" />
                                        <div className="text">
                                            <span>shampo & condtioner</span>
                                            <p>elseve for tinted hair and coloration for long lasting and shining color</p>
                                            <span>350ml / 300ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">16.40$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(11)} to="/details">
                                        <h5>new</h5>
                                        <img src={hairOne} alt="hairone" />
                                        <div className="text">
                                            <span>TRESemme shampo</span>
                                            <p>the ultra shine shampo and hairCreme for dry, damaged and colored hair</p>
                                            <span>48ml</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">10.50$</h4>
                                </div>
                            </div>

                            <div className="products-slide three">
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(5)} to="/details">
                                        <h5>try me</h5>
                                        <img src={makeupOne} alt="makeupOne" />
                                        <div className="text">
                                            <span>Hd saturated colors</span>
                                            <p> 3 hot designs and a makeup kit. Comes with a variety of shades</p>
                                            <span>15 saturated color</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">18.05$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(8)} to="/details">
                                        <h5>new</h5>
                                        <img src={lipOne} alt="lipone" />
                                        <div className="text">
                                            <span>Doll Lipstick</span>
                                            <p> the Doll Beauty lipsticks are versatile, highly pigmented and lightweight</p>
                                            <span>7g/ 12 color</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">8.80$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(6)} to="/details">
                                        <h5>new</h5>
                                        <img src={blushTwo} alt="blushTwo" />
                                        <div className="text">
                                            <span>Blusher</span>
                                            <p>blush from Dior that gives cheeks intense, ultra-pigmented color that lasts</p>
                                            <span>30g / pink/ red/ peach</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">9.15$</h4>
                                </div>
                                <div className="product-item">
                                    <Link className="detail" onClick={() => handleDetails(7)} to="/details">
                                        <h5>try me</h5>
                                        <img src={blushThree} alt="blushTree" />
                                        <div className="text">
                                            <span>Fit me Blusher</span>
                                            <p>FIT me blush the socond colloction of nude colors from FITme</p>
                                            <span>20g / ivory / light beige</span>
                                        </div>
                                    </Link>
                                    <h4 className="price">7.60$</h4>
                                </div>
                            </div>
                            </Swiper>
                            <button className="next" onClick={next2}><i className="fa fa-angle-right"></i></button>
                        </div>
                    </section>

                    <section className="main-slide-section">
                        <h2>Discover the new collections</h2>
                        <div className="slide-container">
                            <div className="slider">
                                <div className="slide slide1">
                                    <Link to="/">
                                        <div className="poster one">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster two">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster three">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster four">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="slide slide2">
                                    <Link to="/">
                                        <div className="poster one">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster two">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster three">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster four">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="slide slide3">
                                    <Link to="/">
                                        <div className="poster one">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster two">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster three">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster four">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="slide slide1">
                                    <Link to="/">
                                        <div className="poster one">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster two">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster three">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="poster four">
                                            <p>discover</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="whats-popular-section">
                        <div>
                            <h2>popular Products</h2>
                            <div className="popular-products">
                                <button className="pre" onClick={prev3}><i className="fa fa-angle-left"></i></button>
                                <Swiper getSwiper={updateSwiper3}>
                                <div className="products-slide one">
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                </div>

                                <div className="products-slide two">
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                </div>

                                <div className="products-slide three">
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                    <div className="product-item">
                                        <Link className="detail" onClick={() => handleDetails(1)} to="/details">
                                            <h5>New</h5>
                                            <img src={faceCremeOne} alt="cremeOne"/>
                                            <div className="text">
                                                <span>Night creme</span>
                                                <p>L'OREAL Nutrition Intense, Age perfect cell renewal for everyday use</p>
                                                <span>85ml</span>
                                            </div>
                                        </Link>
                                        <h4 className="price">12.75$</h4>
                                    </div>
                                </div>
                                </Swiper>
                                <button className="next" onClick={next3}><i className="fa fa-angle-right"></i></button>
                            </div>
                        </div>
                    </section>
                </div>

            </main>

            <footer>

                <div>

                </div>

            </footer>
        </div>
    );
};

export default Home;
