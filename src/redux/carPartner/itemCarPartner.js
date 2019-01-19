import * as Types from 'redux/carPartner/ActionTypes';
var car ={};
   
const item = (state = car, action) => {
    switch (action.type) {
        case Types.FIND_CAR_PARTNER: 
            return action.data;
        default: return {...state};
        }
    };

export default item;