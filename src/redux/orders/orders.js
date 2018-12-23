import * as Types from 'redux/orders/ActionTypes';
var listORDERS = [];
   
const ORDERS = (state = listORDERS, action) => {
    switch (action.type) {
        case Types.LOAD_ORDERS: 
            return action.data;
        case Types.ADD_ORDERS: 
            return action.data;
        case Types.DELETE_ORDERS: 
            return action.data;
        case Types.UPDATE_ORDERS: 
            return action.data;
        
        default: return state;
        }
    };

export default ORDERS;