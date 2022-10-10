import React from 'react';
import './Store.css';
import Product from '../Product/Product';
import { useEffect, useState } from 'react';


const Store = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='store'>
            <div className="product-container">
                {
                    product.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2 className='cart-title'>Order Summary</h2>
                <div className='cart-item'>
                    <p><b> Selected Items: </b>6</p>
                    <p><b> Total Price: </b>$1140</p>
                    <p><b> Total Shipping Charge: </b>$5</p>
                    <p><b> Tax: </b>$114</p>
                </div>
                <div className='btn-container'>
                    <button className='clear-cart'>Clear Cart</button>
                    <button className='btn-cart'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Store;