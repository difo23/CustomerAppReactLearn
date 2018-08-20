 import {handleActions} from 'redux-actions';
import { FETCH_CUSTOMERS } from '../Constants';

 export const customers = handleActions(
     {
     [FETCH_CUSTOMERS]: (state, action) => [...action.payload],}
     ,[]
    );
