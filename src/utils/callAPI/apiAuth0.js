import axios from 'axios';
import config from 'settings/index';

export default function callApiAuth0(endpoint, method = 'GET', body) {
    return axios({
        url: `${config.API_URL_S}/${endpoint}`,
        method,
        headers:{
            'access-control-request-origin':'*',
            'content-type' : 'application/json-patch+json',
            'accept':'application/json',
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

