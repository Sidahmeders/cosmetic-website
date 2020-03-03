import React, { useEffect, useContext } from 'react';
import '../styles/navbar/navbar.css';
import { ContextConsumer } from '../context';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function Navbar() {

    const context = useContext(ContextConsumer);
    let productsCount = 0;
    context.cart.map(item => productsCount++);
    const {filterPages} = context;

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

        <header>
            <div className="logo">
                <a className="link" href="/">SID<span>AH</span>MED</a>
            </div>
            <nav id="navLinks" className="nav-links">
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li>
                        <a className="link" href="#/">
                            hair&Shampo<i className="fas fa-caret-down"></i>
                        </a>
                        <ul>
                            <li>
                            <Link className="link" to="/productspage" onClick={() => filterPages("shampoo","loreal")}>
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
                        <a className="link" href="#/">
                            body&Lotions<i className="fas fa-caret-down"></i>
                        </a>
                        <ul>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"4px",color:"#3f0"}}>
                                Vaseline
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"5px",color:"#20d"}}>
                                NEVIA <i className="fa fa-female"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"4px",color:"#d10"}}>
                                ABUSAAD
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"4px",color:"#990"}}>
                                VENUS<i className="fab fa-vuejs"></i>
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
                        <a className="link" style={{fontSize:".9em",padding:"7px 4px"}} href="#/">
                        Skin&FaceCreme<i className="fas fa-caret-down"></i>
                        </a>
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
                                MIXA <i className="fab fa-mix"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"2px",color:"#d0d"}}>
                                OE / <span style={{color:"#0d3"}}>DOVE</span>
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
                                L'OREAL<span style={{color:"red",fontSize:".7em"}}>-paris</span>
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
                        <a className="link" href="#/">
                        Deo&Pefumes<i className="fas fa-caret-down"></i>
                        </a>
                        <ul>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#96f"}}>
                                10th Avenue 
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"4px",color:"#25f"}}>
                                REXONA<i className="fa fa-check"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"3px",color:"#d18"}}>
                                GEPERLI <i className="fa fa-feather"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"2px",color:"#d90"}}>
                                OE / <span style={{color:"#019"}}>DOVE</span>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{fontSize:".9em",color:"#f80"}}>
                                DOLCE&GABANA
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{color:"#099"}}>
                                Franck Oliver
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#d10"}}>
                                Axe / <span style={{color:"#1d6"}}>Nevia</span>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#124"}}>
                                Smart<span style={{color:"blue",fontSize:".6em"}}>collection</span>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#f6f"}}>
                                JOHAN_B <i className="fa fa-signature"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"2px",color:"#28f"}}>
                                Louis varel
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{fontSize:".9em",color:"#d82"}}>
                                Paco Rabanne
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#364"}}>
                                Miss Flowers
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
                        <a className="link" href="#/">
                        Makeup&Care<i className="fas fa-caret-down"></i>
                        </a>
                        <ul>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#909"}}>
                                MASCARA <i className="fa fa-broom"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"2px",color:"#667"}}>
                                EyeLiner <i className="fa fa-pen"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{color:"#d64"}}>
                                Fond de Tient
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"2px",color:"#d06"}}>
                                BLUSHER <i className="fa fa-dot-circle"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{color:"#01d"}}>
                                EyeShadow <i className="fa fa-palette"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"3px",color:"#f04"}}>
                                LipStick <i className="fa fa-chess"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1.5px",color:"#f83"}}>
                                HighLighter
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{fontSize:".95em",color:"#234"}}>
                                Brush&Sponge
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#982"}}>
                                Primer&Fixer
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{color:"#088"}}>
                                BridalMakeup
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
                        <a className="link" href="#/">
                        Babies & Kids<i className="fas fa-caret-down"></i>
                        </a>
                        <ul>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#d90"}}>
                                Jhonson <i className="fa fa-baby"></i>
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"2px",color:"#d08"}}>
                                Mixa bebe
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{color:"#f63"}}>
                                Malizia bebe
                                </span>
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to="/">
                                <span style={{letterSpacing:"1px",color:"#8d1"}}>
                                Venus bebe
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
        
    </div>
  );
};

export default Navbar;
