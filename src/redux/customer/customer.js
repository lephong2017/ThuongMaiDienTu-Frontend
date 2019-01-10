import * as Types from 'redux/customer/ActionTypes';
var listCUSTOMER = [];
   
const CUSTOMER = (state = listCUSTOMER, action) => {
    switch (action.type) {
        case Types.LOAD_CUSTOMER: 
            return action.data;
        case Types.ADD_CUSTOMER: 
            return action.data;
        case Types.DELETE_CUSTOMER: 
            return action.data;
        case Types.UPDATE_CUSTOMER: 
            return action.data;
        
        default: return state;
        }
    };

export default CUSTOMER;