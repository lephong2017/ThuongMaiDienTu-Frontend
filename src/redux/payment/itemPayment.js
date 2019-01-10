import * as Types from 'redux/payment/ActionTypes';
var PAYMENT ={};
   
const item = (state = PAYMENT, action) => {
    switch (action.type) {
        case Types.FIND_PAYMENT: 
            return action.data;
        default: return {...state};
        }
    };

export default item;