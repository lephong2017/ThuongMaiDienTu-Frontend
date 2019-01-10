import * as Types from 'redux/feature/ActionTypes';
var FEATURE ={};
   
const item = (state = FEATURE, action) => {
    switch (action.type) {
        case Types.FIND_FEATURE: 
            return action.data;
        default: return {...state};
        }
    };

export default item;