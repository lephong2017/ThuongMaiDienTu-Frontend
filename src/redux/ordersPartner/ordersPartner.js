import * as Types from 'redux/ordersPartner/ActionTypes';
var listORDERS = [];
   
const ORDERS = (state = listORDERS, action) => {
    switch (action.type) {
        case Types.LOAD_ORDERS_PARTNER: 
            return action.data;
        case Types.ADD_ORDERS_PARTNER: 
            return action.data;
        case Types.DELETE_ORDERS_PARTNER: 
            return action.data;
        case Types.UPDATE_ORDERS_PARTNER: 
            return action.data;
        
        default: return state;
        }
    };

export default ORDERS;