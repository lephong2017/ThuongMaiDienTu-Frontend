import * as Types from 'redux/partnerPackage/ActionTypes';
var listPartnerHire = [];
   
const partnerHire = (state = listPartnerHire, action) => {
    switch (action.type) {
        case Types.GET_PARTNER_NEAR_HIRE: 
            return action.data;
        default: return state;
        }
    };

export default partnerHire;