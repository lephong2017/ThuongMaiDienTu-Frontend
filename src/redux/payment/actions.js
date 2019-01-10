import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
            dispatch(actCountData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actCountData = (data) => {
    return {
        type: Types.COUNT_DATA,
        data
    }
}
export const reqSearchPayment = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortPayment, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Payment/PagingConditionPrice/condition/pageIndex/pageSize/sortPayment/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortPayment=${sortPayment}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_PAYMENT,
        data
    }
}

export const reqFindPayment = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindPayment(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindPayment = (data) => {
    return {
        type: Types.FIND_PAYMENT,
        data
    }
}

export const reqDeletePayment = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Payment/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeletePayment(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeletePayment = (data) => {
    return {
        type: Types.DELETE_PAYMENT,
        data
    }
}

export const reqUpdatePayment = (id, Payment, accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/Update/${id}`, 'PUT', Payment, accesstoken).then(res => {
            return callApis(`Payment/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdatePayment(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdatePayment = (data) => {
    return {
        type: Types.UPDATE_PAYMENT,
        data
    }
}

export const reqAddPayment = (Payment, accesstoken) => {
    return (dispatch) => {
        return callApis(`Payment/Create`, 'POST', Payment, accesstoken).then(res => {
            console.log(Payment);
            return callApis(`Payment/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddPayment(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddPayment = (data) => {
    return {
        type: Types.ADD_PAYMENT,
        data
    }
}
