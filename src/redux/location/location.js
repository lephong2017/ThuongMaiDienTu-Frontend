import * as Types from 'redux/location/ActionTypes';
var listLOCATION = [];
   
const LOCATION = (state = listLOCATION, action) => {
    switch (action.type) {
        case Types.LOAD_LOCATION: 
            return action.data;
        case Types.ADD_LOCATION: 
            return action.data;
        case Types.DELETE_LOCATION: 
            return action.data;
        case Types.UPDATE_LOCATION: 
            return action.data;
        case Types.ALL_LOCATION: 
            return action.data;
        
        default: return state;
        }
    };

export default LOCATION;