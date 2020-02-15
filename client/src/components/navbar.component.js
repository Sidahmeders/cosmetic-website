import React, { useEffect } from 'react';
import '../styles/navbar/navbar.css';
import { ProductsConsumer } from '../context';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function Navbar() {

    let isTrue = false;
    const toggleMenu = () => {
        const navLinks = document.getElementById('navLinks');
        const Lines = [...document.querySelectorAll('#line')];
        if(isTrue) {
          isTrue = false ;
          Lines.forEach(item => item.classList.add('open'));
          navLinks.classList.add('active');
          document.body.classList.add('hide');
        } else {
          isTrue = true;
          Lines.forEach(item => item.classList.remove('open'));
          navLinks.classList.remove('active');
          document.body.classList.remove('hide');
        }
    }

    const location = useLocation();
    useEffect(() => {
        toggleMenu();
    },[location.pathname]);

    
  return (
    <div className="navbar-container">
        <ProductsConsumer>
            {(value) => {
                let productsCount = 0;
                value.cart.map(item => productsCount++);

                return (
                    <header>
                        <div className="logo">
                            <Link className="link" to="/">SID<span>AH</span>MED</Link>
                        </div>
                        <nav id="navLinks" className="nav-links">
                            <ul>
                                <li><Link className="link" to="/">Home</Link></li>
                                <li>
                                    <Link className="link" to="/">
                                        hair&Shampo<i className="fas fa-caret-down"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{color:"gold"}}>
                                            L'OREAL <span style={{fontSize:".8em",color:"red"}}>_paris</span>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"green"}}>
                                            GARNIER <i className="fab fa-envira"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{color:"#d11"}}>
                                            TRESemme <i className="fa fa-tint"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"4px",color:"#79f"}}>
                                            NIVEA <i className="fa fa-male"></i> <i className="fa fa-female"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"3.5px",color:"#956"}}>
                                            PROVOST
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"4px",color:"#555"}}>
                                            SYOSS <i className="fa fa-bacon"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"5px",color:"#2dd"}}>
                                            DOVE <i className="fa fa-dove"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"3px",color:"#2d2"}}>
                                            SWaLiS <i className="fa fa-check"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{color:"#972"}}>
                                            PALMOLIVE<i className="fab fa-500px"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#70f"}}>
                                            OTHERS <i className="fa fa-diagnoses"></i>
                                            </span>
                                        </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="link" to="/" style={{fontSize:".9em",padding:"7px 4px"}}>
                                    Skin&faceCreme<i className="fas fa-caret-down"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"1px",color:"#36f"}}>
                                            NEVIA <span style={{fontSize:".8em"}}>creme</span>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"6px",color:"orange"}}>
                                            VENUS<i className="fab fa-vuejs"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"7px",color:"#dd0"}}>
                                            MIXA <i className="fab fa-mixer"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#d0d"}}>
                                            OE / DOVE
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"green"}}>
                                            CALLIDERM
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#878"}}>
                                            touch me
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"1px",color:"#f2d"}}>
                                            Diadermine
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"1px",color:"gold"}}>
                                            L'OREAL <span style={{color:"red",fontSize:".7em"}}>-paris</span>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#70f"}}>
                                            OTHERS <i className="fa fa-diagnoses"></i>
                                            </span>
                                        </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="link" to="/">
                                    Deo&Pefumes<i className="fas fa-caret-down"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"1px",color:"#36f"}}>
                                            NEVIA <span style={{fontSize:".8em"}}>creme</span>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"6px",color:"orange"}}>
                                            VENUS<i className="fab fa-vuejs"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"7px",color:"#dd0"}}>
                                            MIXA <i className="fab fa-mixer"></i>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#d0d"}}>
                                            OE / DOVE
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"green"}}>
                                            CALLIDERM
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#878"}}>
                                            touch me
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"1px",color:"#f2d"}}>
                                            Diadermine
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"1px",color:"gold"}}>
                                            L'OREAL <span style={{color:"red",fontSize:".7em"}}>-paris</span>
                                            </span>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link className="link" to="/">
                                            <span style={{letterSpacing:"2px",color:"#70f"}}>
                                            OTHERS <i className="fa fa-diagnoses"></i>
                                            </span>
                                        </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="shopping-cart">
                            <Link className="link" to="/shoppingcart">
                                <span className="quantity">{productsCount}</span>
                                <i className="fa fa-cart-plus"></i>
                                My-cart
                            </Link>
                        </div>
                        <div className="menu-lines" onClick={toggleMenu}>
                            <span id="line" className="line"></span>
                            <span id="line" className="line"></span>
                            <span id="line" className="line"></span>
                        </div>
                    </header>
                );
            }}
        </ProductsConsumer>
    </div>
  );
};

export default Navbar;
