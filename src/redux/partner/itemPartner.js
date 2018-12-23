import * as Types from 'redux/partner/ActionTypes';
var PARTNER ={};
   
const item = (state = PARTNER, action) => {
    switch (action.type) {
        case Types.FIND_PARTNER: 
            return action.data;
        default: return {...state};
        }
    };

export default item;