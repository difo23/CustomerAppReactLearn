import {createAction} from 'redux-actions';
import {UPDATE_CUSTOMER} from '../Constants';
import { apiPut } from '../api';
import { urlCustomers } from '../api/urls';

export const updateCustomer = createAction(UPDATE_CUSTOMER,
    (id, customer) => apiPut(urlCustomers, id, customer)());