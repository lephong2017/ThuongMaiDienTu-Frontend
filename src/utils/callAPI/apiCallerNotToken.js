import axios from 'axios';
import config from 'settings/index';

export const callRegisterAPI=( method = 'GET', body,IAM) =>{
    return axios({
        url: `${config.API_URL_REGISTER}`,
        method,
        headers:{
            'content-type' : 'application/json',
            'accept' : 'application/json',
            'authorization' : `${IAM}`
        },
        data: body
    }).catch(err => {
        return (err);
    });
};
export const callLogin=( method = 'GET', body,username,password) =>{
    return axios({
        url: `${config.API_URL_LOGIN}`,
        method,
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'Authorization':'Basic '+btoa(`${username}:${password}`)
        },
        data: body
    }).catch(err => {
        return (err);
    });
};
export const callGetIAM=( method = 'GET', body) =>{
    return axios({
        url: `${config.API_URL_IAM}`,
        method,
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
        },
        data: body
    }).catch(err => {
        return (err);
    });
};

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        url: `${config.API_URL_S}/${endpoint}`,
        method,
        headers:{
            'access-control-request-origin':'*',
            'content-type' : 'application/json',
        },
        data: body
    }).catch(err => {
        return (err);
    });
};
