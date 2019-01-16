import callApis from 'utils/callAPI/apiAuth0';
import * as CONST_VARIABLE from 'utils/const/index';
import * as Types from 'redux/auth0/ActionTypes';
import jwt_decode from 'jwt-decode';
export const actRegisterRequest = (user) => {
    const body={
        emails:[
            {
                value: user.email
            }   
        ],
        userName:user.username,
        password:user.password
    } 
    return callApis('AppID/RegisterAccount', 'POST', body).then(res => {
        sessionStorage.setItem(CONST_VARIABLE.REGISTER, body);
    }).catch(error => console.log("Fetch Error "+ error));
}

export const actLoginRequest = (user) => {
    return (dispatch) => {
        return callApis(`AppID/LoginAccount`, 'POST', user).then(res => {
            
            if(res.data){
                sessionStorage.setItem(CONST_VARIABLE.LOGIN, JSON.stringify(user));             
                sessionStorage.setItem(CONST_VARIABLE.ACCESS_TOKEN, res.data.id_token);
                var token = res.data.id_token;
                var decoded = jwt_decode(token);
                sessionStorage.setItem(CONST_VARIABLE.ROLE_ACCOUNT, decoded.name);
                dispatch(actLogin(true));
            } 
            else sessionStorage.removeItem(CONST_VARIABLE.LOGIN);
        });
    } 
};

export const actLogin=(auth0)=>{
    return {
        type: Types.LOGIN,
        auth0
    }
}

