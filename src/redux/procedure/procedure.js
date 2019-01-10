import * as Types from 'redux/procedure/ActionTypes';
var listPROCEDURE = [];
   
const PROCEDURE = (state = listPROCEDURE, action) => {
    switch (action.type) {
        case Types.LOAD_PROCEDURE: 
            return action.data;
        case Types.ADD_PROCEDURE: 
            return action.data;
        case Types.DELETE_PROCEDURE: 
            return action.data;
        case Types.UPDATE_PROCEDURE: 
            return action.data;
        
        default: return state;
        }
    };

export default PROCEDURE;