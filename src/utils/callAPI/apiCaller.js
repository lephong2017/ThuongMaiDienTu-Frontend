import axios from 'axios';
import  config from 'settings/index';

export default function callApi(endpoint, method = 'GET', body, accesstoken) {
    return axios({
        url: `${config.API_URL_S}/${endpoint}`,
        method,
        headers:{
            'access-control-request-origin':'*',
            'content-type' : 'application/json-patch+json',
            'accept':'application/json',
            'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

export const callApiNotToken=(endpoint, method = 'GET', body, accesstoken) =>{
    return axios({
        url: `${config.API_URL_S}/${endpoint}`,
        method,
        headers:{
            'access-control-request-origin':'*',
            'content-type' : 'application/json-patch+json',
            'accept':'application/json',
            // 'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};