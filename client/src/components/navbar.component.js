import React from 'react';
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/shoppingcart">shopcart</a></li>
                        <li>
                            <i className="fas fa-caret-down"></i>
                            <a href="/details">details</a>
                            <ul>
                                <li><a href="/">Link 1</a></li>
                                <li><a href="/">Link 2</a></li>
                                <li><a href="/">Link 3</a></li>
                                <li><a href="/">Link 4</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Home4</a></li>
                        <li>
                            <i className="fas fa-caret-down"></i>
                            <a href="/">Home5</a>
                            <ul>
                                <li><a href="/">Link 1</a></li>
                                <li><a href="/">Link 2</a></li>
                                <li><a href="/">Link 3</a></li>
                                <li><a href="/">Link 4</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Home6</a></li>
                    </ul>
                </nav>
                <div className="shopping-cart">
                    <span className="quantity">13</span>
                   <a href="/">
                       <i className="fa fa-cart-plus"></i>
                       My-cart
                    </a>
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
}

export default Navbar;


