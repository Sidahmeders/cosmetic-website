import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {

    let isTrue = false;
    const toggleMenu = () => {
        const navLinks = document.getElementById('navLinks');
        const Lines = [...document.querySelectorAll('#line')];
        if(isTrue) {
          isTrue = false ;
          Lines.forEach(item => item.classList.add('open'));
          navLinks.classList.add('active');
        } else {
          isTrue = true;
          Lines.forEach(item => item.classList.remove('open'));
          navLinks.classList.remove('active');
        }
    }


  return (
    <div>
        <div className="navbar-container">
            <header>
                <div className="logo">SID<span>AH</span>MED</div>
                <nav id="navLinks" className="nav-links">
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/">undefined</Link></li>
                        <li>
                            
                            <Link className="link" to="/productslist">
                                <i className="fas fa-caret-down"></i>
                                product
                            </Link>
                            <ul>
                                <li><Link className="link" to="/">hair</Link></li>
                                <li><Link className="link" to="/">makeup</Link></li>
                                <li><Link className="link" to="/">creme</Link></li>
                                <li><Link className="link" to="/">fragrance</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link" to="/details">Details</Link></li>
                        <li>
                            <Link className="link" to="/">
                                <i className="fas fa-caret-down"></i>
                                Home5
                            </Link>
                            <ul>
                                <li><Link className="link" to="/">Link 1</Link></li>
                                <li><Link className="link" to="/">Link 2</Link></li>
                                <li><Link className="link" to="/">Link 3</Link></li>
                                <li><Link className="link" to="/">Link 4</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link" to="/">Home6</Link></li>
                    </ul>
                </nav>
                <div className="shopping-cart">
                    <span className="quantity">13</span>
                   <Link className="link" to="/shoppingcart">
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
    </div>
  );
};

export default Navbar;


