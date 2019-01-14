import * as Types from 'redux/partnerPackage/ActionTypes';
var PARTNERPACKAGE ={};
   
const item = (state = PARTNERPACKAGE, action) => {
    switch (action.type) {
        case Types.FIND_PARTNERTENANTPACKAGE: 
            return action.data;
        default: return {...state};
        }
    };

export default item;