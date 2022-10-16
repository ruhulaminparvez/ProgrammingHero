import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo/logo-covid.png'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className='logo-section'>
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>
            <nav className='nav-items'>
                <Link className='nav-item' to="/stats">Home</Link>
                <Link className='nav-item' to="/syndrome">Syndrome</Link>
                <Link className='nav-item' to="/prevention">Prevention</Link>
                <Link className='nav-item' to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;