import React from 'react';
import loadingGiF from '../img/gif.gif'
const Lodaing = () => {
    return (
        <div>
        <div className="text-center">
        <img src={loadingGiF} className="w-75" alt="loading" />
      </div>
        </div>
    );
};

export default Lodaing;