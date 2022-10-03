import React from 'react';
import './ShowImage.css';
import motion from '../../images/nation-motion.svg';

const ShowImage = () => {
    return (
        <div className='Motion'>
            <img className='Motion-Img' src={motion} alt=""/>
            <p>"Below List of All Countries Information's"</p>
        </div>
    );
};

export default ShowImage;