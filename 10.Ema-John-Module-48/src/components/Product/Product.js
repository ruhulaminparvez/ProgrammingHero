import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, quantity, stock, ratings, category} = props.product;
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <div className='product-item'>
                <h2>{name.slice(0, 20)}</h2>
                <p><b>Category:</b>  {category}</p>
                <p><b>Price:</b> ${price}</p>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Rating:</b> {ratings}</p>
                <p>Only <b>{stock}</b> left in stock - order soon</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;