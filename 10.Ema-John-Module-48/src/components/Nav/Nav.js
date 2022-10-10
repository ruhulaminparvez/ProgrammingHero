import React from 'react';
import logo from '../../logo/amazon_ecommerce_logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className='navbar'>
            <img className='img' src={logo} alt="logo" />
            <div className='nav-links'>
                <a className='nav-link' href="/home">Home</a>
                <a className='nav-link' href="/review">Review</a>
                <a className='nav-link' href="/order">Order</a>
                <a className='nav-link' href="/delivery">Delivery</a>
                <a className='nav-link' href="/about">About</a>
            </div>
        </div>
    );
};

export default Nav;