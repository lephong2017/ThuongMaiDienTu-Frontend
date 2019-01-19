import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes'; 
import {callApiNotToken} from 'utils/callAPI/apiCaller';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Customer/CountAll/pagesize/pageNow`, 'GET', null, accesstoken).then(res => {
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
export const reqSearchCustomer = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Customer/PagingCondition/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApiNotToken(`Customer/Paging/pagesize/pageNow?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortCustomer, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Customer/PagingConditionPrice/condition/pageIndex/pageSize/sortCustomer/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortCustomer=${sortCustomer}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_CUSTOMER,
        data
    }
}

export const reqFindCustomer = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Customer/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindCustomer(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindCustomer = (data) => {
    return {
        type: Types.FIND_CUSTOMER,
        data
    }
}

export const reqDeleteCustomer = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Customer/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Customer/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteCustomer(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteCustomer = (data) => {
    return {
        type: Types.DELETE_CUSTOMER,
        data
    }
}

export const reqUpdateCustomer = (id, Customer, accesstoken) => {
    return (dispatch) => {
        return callApis(`Customer/Update/${id}`, 'PUT', Customer, accesstoken).then(res => {
            return callApis(`Customer/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateCustomer(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateCustomer = (data) => {
    return {
        type: Types.UPDATE_CUSTOMER,
        data
    }
}

export const reqAddCustomer = ( Customer, accesstoken) => {
    return (dispatch) => {
        return callApiNotToken(`Customer/Create`, 'POST', Customer, accesstoken).then(res => {
            console.log(res.data);
            return callApiNotToken(`Customer/Paging/pagesize/pageNow?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddCustomer(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddCustomer = (data) => {
    return {
        type: Types.ADD_CUSTOMER,
        data
    }
}
