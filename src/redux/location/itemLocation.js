import * as Types from 'redux/location/ActionTypes';
var LOCATION ={};
   
const item = (state = LOCATION, action) => {
    switch (action.type) {
        case Types.FIND_LOCATION: 
            return action.data;
        default: return {...state};
        }
    };

export default item;