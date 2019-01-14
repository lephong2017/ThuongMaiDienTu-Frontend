import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqSendEmail = (accesstoken) => {
    return (dispatch) => {
        return callApis(``, 'GET', null, accesstoken).then(res => {
            dispatch(actSendmail(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actSendmail= (data) => {
    return {
        type: Types.SENDMAIL,
        data
    }
}

export const reqSendEmailAllPartner = (accesstoken) => {
    return (dispatch) => {
        return callApis(``, 'GET', null, accesstoken).then(res => {
            dispatch(actSendmailAllPartner(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actSendmailAllPartner= (data) => {
    return {
        type: Types.SENDMAIL_ALL_PARTNER,
        data
    }
}
