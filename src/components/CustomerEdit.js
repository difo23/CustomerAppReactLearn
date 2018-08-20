import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';


const validate = value => {
    const error = {

    };
    if (!value.name ){
        error.name = "El campo Nombre es requerido"
    }
    if (!value.dni ){
        error.dni = "El campo Nombre es requerido"
    }
    return error;
}

 const isNumber = value => (
     isNaN(Number(value)) && "Debe ser un numero"
 );

// const isRequired = (value) => (
//     !value && "Este campo es requerido"
// )

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor= {name}> {label}</label>
        <input {...input} type= {!type ? "text": type}/>
       { meta.touched && meta.error && <span>{meta.error} </span>}
    </div>
);

const CustomerEdit = ({name, dni, age, handleSubmit,submitting, onBack}) => {
    return ( 
        <div>
            <h2> Edicion del Cliente </h2>
           <form onSubmit={handleSubmit}>
                   <Field
                        name = "name"
                        component = {MyField} 
                        type = "text"
                        label= "Nombre" >
                    </Field>
                   <Field 
                    name="dni" 
                    component={MyField} 
                    type= "text"
                    label= "DNI">
                   </Field>
                   <Field 
                        name="age"
                        component= {MyField}
                        type="number"
                        validate= {isNumber}
                        label= "Edad" >
                    </Field>
                    <CustomersActions>
                        <button type= "submit" disabled ={submitting} >Aceptar</button>
                        <button onClick ={onBack} > Cancelar </button>
                    </CustomersActions>
           </form> 

        </div>
     );
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
}

const CustomerEditForm = reduxForm(
        {   
            form: 'CustomerEdit',
            validate
        }
    )(CustomerEdit);
const mapInitialVauleToProps = (state, props) => ({initialValues : props});
 
export default setPropsAsInitial(CustomerEditForm) ;