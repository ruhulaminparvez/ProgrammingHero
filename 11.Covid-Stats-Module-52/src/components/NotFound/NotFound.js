import React from 'react';
import './NotFound.css';
import notFound from '../../images/404/404.svg';

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;