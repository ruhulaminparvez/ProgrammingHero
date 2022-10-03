import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, region, flags } = props.country;
    console.log(props.country);
    return (
        <div className='Country'>
            <img className='img' src={flags.png} alt="" />
            <div className='Elements'>
                <p><b>Name:</b>  {name.common}</p>
                <p><b>Capital:</b>  {capital}</p>
                <p><b>Population:</b> {population}</p>
                <p><b>Region:</b> {region}</p>
                <button className='btn btn-dark custom-btn'>See More</button>
            </div>
        </div>
    );
};

export default Country;