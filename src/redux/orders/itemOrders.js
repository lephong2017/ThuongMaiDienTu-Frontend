import * as Types from 'redux/orders/ActionTypes';
var ORDERS ={};
   
const item = (state = ORDERS, action) => {
    switch (action.type) {
        case Types.FIND_ORDERS: 
            return action.data;
        default: return {...state};
        }
    };

export default item;