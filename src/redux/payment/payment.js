import * as Types from 'redux/payment/ActionTypes';
var listPAYMENT = [];
   
const PAYMENT = (state = listPAYMENT, action) => {
    switch (action.type) {
        case Types.LOAD_PAYMENT: 
            return action.data;
        case Types.ADD_PAYMENT: 
            return action.data;
        case Types.DELETE_PAYMENT: 
            return action.data;
        case Types.UPDATE_PAYMENT: 
            return action.data;
        
        default: return state;
        }
    };

export default PAYMENT;