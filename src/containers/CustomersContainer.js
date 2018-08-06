import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomersActions from '../components/CustomersActions';
import CustomersList from '../components/CustomersList';
import AppFrame from '../components/AppFrame';
import { withRouter} from 'react-router-dom';

const customers = [
    {
        dni: "27000000",
        name: "Juan Perez",
        age: 37
    },
    {
        dni: "30000000",
        name: "Lizandro Rodriguez",
        age: 25
    },
    {
        dni: "28000000",
        name: "Ana Sosa",
        age: 18
    }
];

class CustomersContainer extends Component {


    handleAddNew = () => {
        this.props.history.push("/customers/new")

    }
    renderBody = customers => (
        <div>
            <CustomersList 
                        customers = {customers} 
                        urlPath = {"customer/"}
                        > 
            </CustomersList>
            <CustomersActions>
                <button onClick = {this.handleAddNew}> Nuevo Cliente </button>

            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame header = {"Listado de Clientes:"}
                        body = {this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);