import * as Types from 'redux/packages/ActionTypes';
var listPACKAGE = [];
   
const PACKAGE = (state = listPACKAGE, action) => {
    switch (action.type) {
        case Types.LOAD_PACKAGE: 
            return action.data;
        case Types.ADD_PACKAGE: 
            return action.data;
        case Types.DELETE_PACKAGE: 
            return action.data;
        case Types.UPDATE_PACKAGE: 
            return action.data;
        
        default: return state;
        }
    };

export default PACKAGE;