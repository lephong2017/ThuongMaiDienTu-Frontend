import * as Types from 'redux/partnerPackage/ActionTypes';
var listPARTNERPACKAGE = [];
   
const PARTNERPACKAGEE = (state = listPARTNERPACKAGE, action) => {
    switch (action.type) {
        case Types.LOAD_PARTNERTENANTPACKAGE: 
            return action.data;
        case Types.ADD_PARTNERTENANTPACKAGE: 
            return action.data;
        case Types.DELETE_PARTNERTENANTPACKAGE: 
            return action.data;
        case Types.UPDATE_PARTNERTENANTPACKAGE: 
            return action.data;
        
        default: return state;
        }
    };

export default PARTNERPACKAGEE;