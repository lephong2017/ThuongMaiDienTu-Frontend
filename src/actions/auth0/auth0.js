import callApis from 'utils/callAPI/apiCaller';
import * as CONST_VARIABLE from 'utils/const/index';
import * as Types from 'redux/auth0/ActionTypes';
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
    return callApis('AppID/RegisterAccount', 'POST', body,'accesstoken').then(res => {
        sessionStorage.setItem(CONST_VARIABLE.REGISTER, body);
    }).catch(error => console.log("Fetch Error "+ error));
}

export const actLoginRequest = (user) => {
    return (dispatch) => {
        return callApis(`AppID/LoginAccount`, 'POST', user,'accesstoken').then(res => {
            if(res.data){
                sessionStorage.setItem(CONST_VARIABLE.LOGIN, user);             
                sessionStorage.setItem(CONST_VARIABLE.ACCESS_TOKEN, res.data.access_token);
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

