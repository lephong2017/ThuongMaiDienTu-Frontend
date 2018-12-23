import * as Types from './ActionTypes';
var auth0 = false;
   
const auth = (state = auth0, action) => {
    switch (action.type) {
        case Types.LOGIN: 
            return action.auth0;
        default: return auth0;
        }
    };

export default auth;