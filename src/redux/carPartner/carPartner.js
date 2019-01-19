import * as Types from 'redux/carPartner/ActionTypes';
var listCar = [];
   
const car = (state = listCar, action) => {
    switch (action.type) {
        case Types.LOAD_CAR_PARTNER: 
            return action.data;
        case Types.ADD_CAR_PARTNER: 
            return action.data;
        case Types.DELETE_CAR_PARTNER: 
            return action.data;
        case Types.UPDATE_CAR_PARTNER: 
            return action.data;
        
        case Types.LOAD_CAR_PARTNER_FILTER_LOCATION_AND_DATE: 
            return action.data;
        
        default: return state;
        }
    };

export default car;