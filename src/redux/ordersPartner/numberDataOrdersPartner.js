import * as Types from 'redux/ordersPartner/ActionTypes';
var number = 5;
   
const numberData = (state = number, action) => {
    switch (action.type) {
        case Types.COUNT_DATA_ORDER_PARTNER: 
            number= action.data;
            return action.data;
        default: return state;
        }
    };

export default numberData;