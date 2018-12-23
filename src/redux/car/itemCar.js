import * as Types from './ActionTypes';
var car ={};
   
const item = (state = car, action) => {
    switch (action.type) {
        case Types.FIND_CAR: 
            return action.data;
        default: return {...state};
        }
    };

export default item;