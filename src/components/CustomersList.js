import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomersListItem';

const CustomersList = ({customers, urlPath}) => {
//    const customersArray = Array.from(customers);

    return ( 
        <div>
            <div className = "customers-list">
            { 
                customers.map( customer => 
                <CustomersListItem
                    key = {customer.dni}
                    dni = {customer.dni}
                    name = {customer.name}
                    editAction = {'editar'}
                    delAction = {'Eliminar'}
                    urlPath = {urlPath}>
            </CustomersListItem>)
            }
            </div>
        </div>
    );
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
}
 
export default CustomersList;