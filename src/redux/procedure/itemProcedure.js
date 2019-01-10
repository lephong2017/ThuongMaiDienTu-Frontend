import * as Types from 'redux/procedure/ActionTypes';
var PROCEDURE ={};
   
const item = (state = PROCEDURE, action) => {
    switch (action.type) {
        case Types.FIND_PROCEDURE: 
            return action.data;
        default: return {...state};
        }
    };

export default item;