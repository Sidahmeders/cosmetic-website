import React, { useState } from 'react';
import '../styles/home.css';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import brushes from '../cos-img/lipstick-liq.jpg';
import lips from '../cos-img/lips.jpg';


const  Home = () => {

    const [swiper, updateSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
      };
     
      const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
      };

        
    return (
        <div className="home">
            
            <header>
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
                        <button className="pre" onClick={goPrev}></button>
                        <Swiper getSwiper={updateSwiper}>
                            <div>
                                <div className="card">
                                    <div className="slider-text">
                                        
                                    </div>
                                    <div className="content">
                                    
                                        <a href="/">Discover more</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="slider-text">
                                        
                                    </div>
                                    <div className="content">
                                    
                                        <a href="/">Discover more</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="slider-text">
                                        
                                    </div>
                                    <div className="content">
                                    
                                        <a href="/">Discover more</a>
                                    </div>
                                </div>
                            </div>
                        </Swiper>
                        <button className="next" onClick={goNext}></button>
                    </section>
                    <section className="undefined-section">
                        <div></div>
                        <div></div>
                    </section>
                </div>
            </main>

        </div>
    );
}

export default Home;
