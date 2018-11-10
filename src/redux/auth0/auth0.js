import * as Types from 'redux/auth0/ActionTypes';
var auth0 ={
   isAuth0:false
};
   
const auth = (state = auth0, action) => {
    switch (action.type) {
        case Types.LOGIN: 
            return {...state,auth0:action.auth0};
        default: return {...state};
        }
    };

export default auth;