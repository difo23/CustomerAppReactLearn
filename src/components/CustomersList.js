import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomersListItem';

const CustomersList = (customers) => {
    return ( 
        <div>
            <div className = "customers-list">
            { customers.map(customer =>
                <CustomersListItem
                    key = {customer.dni}
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
    customers: PropTypes.string.isRequired,
}
 
export default CustomersList;