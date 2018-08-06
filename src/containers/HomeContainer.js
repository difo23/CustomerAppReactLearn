import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { withRouter} from 'react-router-dom';
import CustomersActions from '../components/CustomersActions';


class HomeContainer extends Component {
//    La propiedad history se agrega al componente cuando este se encuentra dentro de un elemento route
   
    handleOnClick = () => {
        console.log("HandleOn Click")
        this.props.history.push("/customers");
    }

    render() {
        return (
            <div>
               <AppFrame header = "Home"
                         body = {
                             <div>
                                Esta es la pantalla inicial
                                <CustomersActions>
                                    <button onClick= {this.handleOnClick} > Listado de customers... </button>
                                </CustomersActions>
                             </div>
                         }>
                </AppFrame>

            </div>
        );
    }
}

HomeContainer.propTypes = {

};

// agregar withRouter a mi componente ante de ser exportado me permite decorarlo con los las props History, Search y location.

export default withRouter(HomeContainer);