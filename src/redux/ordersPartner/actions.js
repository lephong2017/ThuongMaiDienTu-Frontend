import callApis from 'utils/callAPI/apiCaller';
import * as Types from './ActionTypes';

export const reqCountData = (accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/CountAllPagingConditionGetByEmail`, 'GET', null, accesstoken).then(res => {
            dispatch(actCountData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actCountData = (data) => {
    return {
        type: Types.COUNT_DATA_ORDER_PARTNER,
        data
    }
}
export const reqSearchOrders = (keyword, pageIndex, pageSize, accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}&condition=${keyword}`, 'GET', null, accesstoken).then(res => {
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}


export const reqLoadDataPaging = (pageIndex,pageSize,accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=${pageSize}&pageNow=${pageIndex}`, 'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const reqSearchProduct = (keyword, pageIndex, pageSize, sortOrders, priceStart, priceEnd, accesstoken) => {
    return (dispatch) => {
        return callApis(
        `Orders/PagingConditionPrice/condition/pageIndex/pageSize/sortOrders/priceStart/priceEnd?condition=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&sortOrders=${sortOrders}&priceStart=${priceStart}&priceEnd=${priceEnd}`,
         'GET', null, accesstoken).then(res => {
            console.log(res.data);    
            dispatch(actLoadDataPaging(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actLoadDataPaging = (data) => {
    return {
        type: Types.LOAD_ORDERS_PARTNER,
        data
    }
}

export const reqFindOrders = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/GetById/${id}`, 'GET', null, accesstoken).then(res => {
                dispatch(actFindOrders(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actFindOrders = (data) => {
    return {
        type: Types.FIND_ORDERS_PARTNER,
        data
    }
}

export const reqDeleteOrders = (id, accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/Delete/${id}`, 'DELETE', null, accesstoken).then(res => {
            return callApis(`Orders/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actDeleteOrders(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actDeleteOrders = (data) => {
    return {
        type: Types.DELETE_ORDERS_PARTNER,
        data
    }
}

export const reqUpdateOrders = (id, Orders, accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/Update/${id}`, 'PUT', Orders, accesstoken).then(res => {
            return callApis(`Orders/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actUpdateOrders(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actUpdateOrders = (data) => {
    return {
        type: Types.UPDATE_ORDERS_PARTNER,
        data
    }
}

export const reqAddOrders = ( Orders, accesstoken) => {
    return (dispatch) => {
        return callApis(`Orders/Create`, 'POST', Orders, accesstoken).then(res => {
            return callApis(`Orders/PagingConditionGetByEmail/pagesize/pageNow/condition?pagesize=5&pageNow=1`, 'GET', null, accesstoken).then(res => {
                dispatch(actAddOrders(res.data));
            }).catch(error => console.log("Fetch Error "+ error));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actAddOrders = (data) => {
    return {
        type: Types.ADD_ORDERS_PARTNER,
        data
    }
}
