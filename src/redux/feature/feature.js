import * as Types from 'redux/feature/ActionTypes';
var listFEATURE = [];
   
const FEATURE = (state = listFEATURE, action) => {
    switch (action.type) {
        case Types.LOAD_FEATURE: 
            return action.data;
        case Types.ADD_FEATURE: 
            return action.data;
        case Types.DELETE_FEATURE: 
            return action.data;
        case Types.UPDATE_FEATURE: 
            return action.data;
        
        default: return state;
        }
    };

export default FEATURE;