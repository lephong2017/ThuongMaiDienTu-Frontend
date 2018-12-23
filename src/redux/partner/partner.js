import * as Types from 'redux/partner/ActionTypes';
var listPARTNER = [];
   
const PARTNER = (state = listPARTNER, action) => {
    switch (action.type) {
        case Types.LOAD_PARTNER: 
            return action.data;
        case Types.ADD_PARTNER: 
            return action.data;
        case Types.DELETE_PARTNER: 
            return action.data;
        case Types.UPDATE_PARTNER: 
            return action.data;
        
        default: return state;
        }
    };

export default PARTNER;