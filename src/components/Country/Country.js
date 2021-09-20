import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, flag, region, capital, population } = props.country; // here we are doing destructuring
    return (
        <div className="country bg-secondary">
            <h4 className="text-warning">This is {name}</h4>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital is {capital}, population {population}</p>
        </div>
    );
};

export default Country;