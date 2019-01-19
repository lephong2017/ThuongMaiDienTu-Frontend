import * as Types from 'redux/ordersPartner/ActionTypes';
var ORDERS ={};
   
const item = (state = ORDERS, action) => {
    switch (action.type) {
        case Types.FIND_ORDERS_PARTNER: 
            return action.data;
        default: return {...state};
        }
    };

export default item;