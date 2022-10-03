/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container">
                    <a className="navbar-brand">REST Countries</a>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    );
};

export default Header;