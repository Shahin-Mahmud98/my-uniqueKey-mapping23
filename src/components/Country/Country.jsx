import React from 'react';
import "./Country.css";

const Country = (props) => {
    // eslint-disable-next-line react/prop-types
    const {region,name,area,population,flags} = props.country;
    return (
        <div className='country' style={{background:"bisque"}}>
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
           <h4>Region : {region}</h4> 
           <p><small>Area : {area}</small></p>
        </div>
    );
};

export default Country;