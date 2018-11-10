import {callRegisterAPI,callGetIAM} from 'utils/callAPI/apiCallerNotToken';
import {apikeys, clientId, secret} from 'settings/index';

export const actRegister = (data) => {
    const IAM = sessionStorage.getItem('IAM');
    return (dispatch) => {
        return callRegisterAPI('POST', data,IAM).then((res) => {
            console.log(res.data);
            
        }).catch(error => console.log("Fetch Error "+ error));
    }
}
export const actLogin = (data,) => {
    // const IAM = sessionStorage.getItem('IAM');
    const username=clientId;
    const password=secret;
    return (dispatch) => {
        return callRegisterAPI('POST', data,username,password).then((res) => {
            console.log(res.data);
            
        }).catch(error => console.log("Fetch Error "+ error));
    }
}
export const actGetIAM = () => {
    const object = {
        data:{
            grant_type : 'urn:ibm:params:oauth:grant-type:apikey',
            apikey : apikeys
        },
    }
    return (dispatch) => {
        return callGetIAM('POST', object.data).then((res) => {
            console.log(res);
            sessionStorage.setItem('IAM',res.data);
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

