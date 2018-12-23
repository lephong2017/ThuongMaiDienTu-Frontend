import * as Types from './ActionTypes';
var listCar = [];
   
const car = (state = listCar, action) => {
    switch (action.type) {
        case Types.LOAD_CAR: 
            return action.data;
        case Types.ADD_CAR: 
            return action.data;
        case Types.DELETE_CAR: 
            return action.data;
        case Types.UPDATE_CAR: 
            return action.data;
        
        default: return state;
        }
    };

export default car;