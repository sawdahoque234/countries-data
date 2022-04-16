import React from 'react';

const CountryInfo = (props) => {
    const{name}=props.country
    return (
        <div>
            <h1>hello{name}</h1>
        </div>
    );
};

export default CountryInfo;