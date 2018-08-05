import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (  
        <div>
            <div className = "customer-data">
            <h2>Datos del Cliente:</h2>
            <div > <strong>Nombre:</strong><i>{name}</i> </div>
            <div > <strong>DNI:</strong><i>{dni}</i> </div>
            <div > <strong>Age:</strong><i>{age}</i> </div>
            </div>
        </div>
    );
}
 
export default CustomerData;