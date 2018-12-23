import * as Types from 'redux/typecar/ActionTypes';
var listTYPECAR = [];
   
const TYPECAR = (state = listTYPECAR, action) => {
    switch (action.type) {
        case Types.LOAD_TYPECAR: 
            return action.data;
        case Types.ADD_TYPECAR: 
            return action.data;
        case Types.DELETE_TYPECAR: 
            return action.data;
        case Types.UPDATE_TYPECAR: 
            return action.data;
        
        default: return state;
        }
    };

export default TYPECAR;